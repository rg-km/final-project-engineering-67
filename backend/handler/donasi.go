package handler

import (
	"final-project-engineering-67/donasi"
	"final-project-engineering-67/helper"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

type donasiHandler struct {
	service donasi.Service
}

func NewDonasiHandler(service donasi.Service) *donasiHandler {
	return &donasiHandler{service}
}

func (h *donasiHandler) GetDonasi(c *gin.Context) {
	userID, _ := strconv.Atoi(c.Query("user_id"))

	donation, err := h.service.GetDonasi(userID)
	if err != nil {
		response := helper.APIResponse("Error Get Donasi", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	response := helper.APIResponse("List of Donasi", http.StatusOK, "success", donasi.FormatDonations(donation))
	c.JSON(http.StatusOK, response)
}
