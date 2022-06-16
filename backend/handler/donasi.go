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

func (h *donasiHandler) GetDonations(c *gin.Context) {
	userID, _ := strconv.Atoi(c.Query("user_id"))

	donations, err := h.service.GetDonasi(userID)
	if err != nil {
		response := helper.APIResponse("Error Get Donasi", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	response := helper.APIResponse("List of Donasi", http.StatusOK, "success", donasi.FormatDonations(donations))
	c.JSON(http.StatusOK, response)
}

func (h *donasiHandler) GetDonation(c *gin.Context) {
	var input donasi.GetDonationDetailInput

	err := c.ShouldBindUri(&input)
	if err != nil {
		response := helper.APIResponse("Error Get Detail Donasi", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	donationDetail, err := h.service.GetDonasiByID(input)
	if err != nil {
		response := helper.APIResponse("Error Get Detail Donasi", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	response := helper.APIResponse("Get Detail Donasi success", http.StatusOK, "success", donasi.FormatDonationDetail(donationDetail))
	c.JSON(http.StatusOK, response)
}
