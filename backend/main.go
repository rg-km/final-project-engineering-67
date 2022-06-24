package main

import (
	"final-project-engineering-67/auth"
	"final-project-engineering-67/donasi"
	"final-project-engineering-67/handler"
	"final-project-engineering-67/helper"
	"final-project-engineering-67/payment"
	"final-project-engineering-67/transaction"
	"final-project-engineering-67/user"
	"log"
	"net/http"
	"path/filepath"
	"strings"

	webHandler "final-project-engineering-67/web/handler"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-contrib/multitemplate"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

// env
func init() {
	if envLoadError := godotenv.Load(); envLoadError != nil {
		log.Fatal("[ ERROR ] Failed to load .env file")
	}
}

func main() {
	db, err := gorm.Open(sqlite.Open("doakan.db"), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})

	if err != nil {
		log.Fatal(err.Error())
	}

	userRepository := user.NewRepository(db)
	donasiRepository := donasi.NewRepository(db)
	transactionRepository := transaction.NewRepository(db)

	userService := user.NewService(userRepository)
	donasiService := donasi.NewService(donasiRepository)
	authService := auth.NewService()
	paymentService := payment.NewService()
	transactionService := transaction.NewService(transactionRepository, donasiRepository, paymentService)

	userHandler := handler.NewUserHandler(userService, authService)
	donasiHandler := handler.NewDonasiHandler(donasiService)
	transactionHandler := handler.NewTransactionHandler(transactionService)

	//web cms
	userWebHandler := webHandler.NewUserHandler(userService)
	dashboardWebHandler := webHandler.NewDashboardHandler()

	router := gin.Default()
	router.Use(CORSMiddleware())

	router.HTMLRender = loadTemplates("./web/templates")

	router.Static("/images", "./images")
	router.Static("/donation-images", "./donation-images")

	// web CMS
	router.Static("/css", "./web/assets/css")
	router.Static("/js", "./web/assets/js")
	router.Static("/imagess", "./web/assets/imagess")
	router.Static("/libs", "./web/assets/libs")
	router.Static("/fonts", "./web/assets/fonts")
	// end CMS

	api := router.Group("api/v1")

	// domain user
	api.POST("/register", userHandler.RegisterUser)
	api.POST("/login", userHandler.Login)
	api.POST("/email_checkers", userHandler.CheckEmailAvailable)
	api.POST("/upload_image_profile", authMiddleware(authService, userService), userHandler.UploadImageProfile)
	api.GET("/users/fetch", authMiddleware(authService, userService), userHandler.FetchUser)

	// domain donasi
	api.GET("/donasi", donasiHandler.GetDonations)
	api.GET("/donasi/:id", donasiHandler.GetDonation)
	api.POST("/donasi", authMiddleware(authService, userService), donasiHandler.CreateDonation)
	api.PUT("/donasi/:id", authMiddleware(authService, userService), donasiHandler.UpdateDonation)
	api.POST("/donasi-images", authMiddleware(authService, userService), donasiHandler.UploadImage)

	// domain transaction
	api.GET("/donasi/:id/transactions", authMiddleware(authService, userService), transactionHandler.GetDonationTransactions)
	api.GET("/transactions", authMiddleware(authService, userService), transactionHandler.GetUserTransactions)
	api.POST("/transactions", authMiddleware(authService, userService), transactionHandler.CreateTransaction)
	api.POST("/transactions/notification", transactionHandler.GetNotification)

	// web CMS
	router.GET("/dashboard", dashboardWebHandler.Dashboard)
	router.GET("/users", userWebHandler.Index)
	router.GET("/users/new", userWebHandler.New)
	router.POST("/users", userWebHandler.Create)
	router.GET("/users/edit/:id", userWebHandler.Edit)
	router.POST("/users/update/:id", userWebHandler.Update)
	router.GET("/users/avatar/:id", userWebHandler.NewAvatar)
	router.POST("/users/avatar/:id", userWebHandler.CreateAvatar)

	router.Run()
}

func authMiddleware(authService auth.Service, userService user.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")

		if !strings.Contains(authHeader, "Bearer") {
			response := helper.APIResponse("Unauthorized", http.StatusUnauthorized, "error", nil)
			c.AbortWithStatusJSON(http.StatusUnauthorized, response)
			return
		}

		//Bearer tokentoken
		tokenString := ""
		arrayToken := strings.Split(authHeader, " ")
		if len(arrayToken) == 2 {
			tokenString = arrayToken[1]
		}

		token, err := authService.ValidateToken(tokenString)
		if err != nil {
			response := helper.APIResponse("Unauthorized", http.StatusUnauthorized, "error", nil)
			c.AbortWithStatusJSON(http.StatusUnauthorized, response)
			return
		}

		payload, ok := token.Claims.(jwt.MapClaims)

		if !ok || !token.Valid {
			response := helper.APIResponse("Unauthorized", http.StatusUnauthorized, "error", nil)
			c.AbortWithStatusJSON(http.StatusUnauthorized, response)
			return
		}

		userID := int(payload["user_id"].(float64))

		user, err := userService.GetUserByID(userID)
		if err != nil {
			response := helper.APIResponse("Unauthorized", http.StatusUnauthorized, "error", nil)
			c.AbortWithStatusJSON(http.StatusUnauthorized, response)
			return
		}

		c.Set("currentUser", user)
	}

}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

//=======================WEB CMS=================================
func loadTemplates(templatesDir string) multitemplate.Renderer {
	r := multitemplate.NewRenderer()

	articleLayouts, err := filepath.Glob(templatesDir + "/layouts/index.html")
	if err != nil {
		panic(err.Error())
	}

	articles, err := filepath.Glob(templatesDir + "/**/*")
	if err != nil {
		panic(err.Error())
	}

	// Generate our templates map from our articleLayouts/ and articles/ directories
	for _, article := range articles {
		layoutCopy := make([]string, len(articleLayouts))
		copy(layoutCopy, articleLayouts)
		files := append(layoutCopy, article)
		r.AddFromFiles(filepath.Base(article), files...)
	}

	adminLayouts, err := filepath.Glob(templatesDir + "/layouts/login.html")
	if err != nil {
		panic(err.Error())
	}

	admins, err := filepath.Glob(templatesDir + "/session/*.html")
	if err != nil {
		panic(err.Error())
	}

	// Generate our templates map from our adminLayouts/ and admins/ directories
	for _, admin := range admins {
		layoutCopy := make([]string, len(adminLayouts))
		copy(layoutCopy, adminLayouts)
		files := append(layoutCopy, admin)
		r.AddFromFiles(filepath.Base(admin), files...)
	}
	return r
}
