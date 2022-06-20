package main

import (
	"final-project-engineering-67/auth"
	"final-project-engineering-67/donasi"
	"final-project-engineering-67/handler"
	"final-project-engineering-67/helper"
	"final-project-engineering-67/user"
	"log"
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go"
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

	userService := user.NewService(userRepository)
	donasiService := donasi.NewService(donasiRepository)
	authService := auth.NewService()

	userHandler := handler.NewUserHandler(userService, authService)
	donasiHandler := handler.NewDonasiHandler(donasiService)

	router := gin.Default()
	router.Static("/images", "./images")
	api := router.Group("api/v1")

	api.POST("/register", userHandler.RegisterUser)
	api.POST("/login", userHandler.Login)
	api.POST("/email_checkers", userHandler.CheckEmailAvailable)
	api.POST("/upload_image_profile", authMiddleware(authService, userService), userHandler.UploadImageProfile)

	api.GET("/donasi", donasiHandler.GetDonations)
	api.GET("/donasi/:id", donasiHandler.GetDonation)
	api.POST("/donasi", authMiddleware(authService, userService), donasiHandler.CreateDonation)
	api.PUT("/donasi/:id", authMiddleware(authService, userService), donasiHandler.UpdateDonation)
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
