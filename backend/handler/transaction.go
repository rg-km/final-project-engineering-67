package handler

import (
	"final-project-engineering-67/helper"
	"final-project-engineering-67/transaction"
	"final-project-engineering-67/user"
	"net/http"

	"github.com/gin-gonic/gin"
)

type transactionHandler struct {
	service transaction.Service
}

func NewTransactionHandler(service transaction.Service) *transactionHandler {
	return &transactionHandler{service}
}

func (h *transactionHandler) GetDonationTransactions(c *gin.Context) {
	var input transaction.GetDonationTransactionsInput

	err := c.ShouldBindUri(&input)
	if err != nil {
		response := helper.APIResponse("Gagal menampilkan donasi transactions", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	currentUser := c.MustGet("currentUser").(user.User)

	input.User = currentUser

	transactions, err := h.service.GetTransactionsByDonationID(input)
	if err != nil {
		response := helper.APIResponse("Gagal menampilkan donasi transactions", http.StatusBadRequest, "error", nil)
		c.JSON(http.StatusBadRequest, response)
		return
	}

	response := helper.APIResponse("Donation's transactions", http.StatusOK, "success", transaction.FormatDonationTransactions(transactions))
	c.JSON(http.StatusOK, response)
}
