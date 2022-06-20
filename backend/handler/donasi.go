package handler

import (
	"final-project-engineering-67/donasi"
	"final-project-engineering-67/helper"
	"final-project-engineering-67/user"
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

func (h *donasiHandler) CreateDonation(c *gin.Context) {
	var input donasi.CreateDonationInput

	err := c.ShouldBindJSON(&input)
	if err != nil {
		errors := helper.FormatValidationError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Donasi gagal dibuat!", http.StatusUnprocessableEntity, "error", errorMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	currentUser := c.MustGet("currentUser").(user.User)

	input.User = currentUser

	newDonation, err := h.service.CreateDonation(input)
	if err != nil {
		response := helper.APIResponse("Donasi gagal dibuat!", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	response := helper.APIResponse("Donasi berhasil dibuat!", http.StatusOK, "success", donasi.FormatDonation(newDonation))
	c.JSON(http.StatusOK, response)
}

func (h *donasiHandler) UpdateDonation(c *gin.Context) {
	var inputID donasi.GetDonationDetailInput

	err := c.ShouldBindUri(&inputID)
	if err != nil {
		response := helper.APIResponse("Error Update Donasi", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	var inputData donasi.CreateDonationInput

	err = c.ShouldBindJSON(&inputData)
	if err != nil {
		errors := helper.FormatValidationError(err)
		errorMessage := gin.H{"errors": errors}

		response := helper.APIResponse("Gagal update donasi!", http.StatusUnprocessableEntity, "error", errorMessage)
		c.JSON(http.StatusUnprocessableEntity, response)
		return
	}

	currentUser := c.MustGet("currentUser").(user.User)

	inputData.User = currentUser

	updatedDonation, err := h.service.UpdateDonation(inputID, inputData)
	if err != nil {
		response := helper.APIResponse("Gagal update donasi!", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	response := helper.APIResponse("Donasi berhasil diupdate!", http.StatusOK, "success", donasi.FormatDonation(updatedDonation))
	c.JSON(http.StatusOK, response)
}
