package transaction

import "time"

type DonationTransactionFormatter struct {
	ID        int       `json:"id"`
	Nama      string    `json:"nama"`
	Amount    int       `json:"amount"`
	CreatedAt time.Time `json:"created_at"`
}

func FormatDonationTransaction(transaction Transaction) DonationTransactionFormatter {
	formatter := DonationTransactionFormatter{}
	formatter.ID = transaction.ID
	formatter.Nama = transaction.User.Nama
	formatter.Amount = transaction.Amount
	formatter.CreatedAt = transaction.CreatedAt
	return formatter
}

func FormatDonationTransactions(transactions []Transaction) []DonationTransactionFormatter {
	if len(transactions) == 0 {
		return []DonationTransactionFormatter{}
	}

	var transactionsFormatter []DonationTransactionFormatter

	for _, transaction := range transactions {
		formatter := FormatDonationTransaction(transaction)
		transactionsFormatter = append(transactionsFormatter, formatter)
	}

	return transactionsFormatter
}
