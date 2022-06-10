package main

// import (
// 	"net/http"
// 	"testing"

// 	"go-test/utils"

// 	"github.com/gin-gonic/gin"
// 	"github.com/stretchr/testify/assert"
// )

// func TestRegisterUser(t *testing.T) {

// 	payload := gin.H{
// 		"nama":      "restu wahyu saputra",
// 		"pekerjaan": "programmer",
// 		"email":     "aski@gmail.com",
// 		"password":  "123456",
// 	}

// 	rr, req := HttpTestRequest("POST", "/users", Strigify(payload))
// 	req.Header.Set("Content-Type", "application/json")

// 	response := utils.Parse(rr.Body.Bytes())

// 	assert.Equal(t, http.StatusOK, response.Code)
// 	assert.Equal(t, "successfuly", response.Status)
// 	assert.Equal(t, "post request successfuly", response.Message)
// }
