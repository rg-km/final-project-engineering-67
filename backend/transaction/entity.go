package transaction

import (
	"final-project-engineering-67/donasi"
	"final-project-engineering-67/user"
	"time"

	"github.com/leekchan/accounting"
)

type Transaction struct {
	ID         int
	DonationID int
	UserID     int
	Amount     int
	Status     string
	VANumber   string
	Bank       string
	PaymentURL string
	User       user.User
	Donation   donasi.Donation
	CreatedAt  time.Time
	UpdatedAt  time.Time
}

func (t Transaction) AmountFormatIDR() string {
	ac := accounting.Accounting{Symbol: "Rp ", Precision: 2, Thousand: ".", Decimal: ","}
	return ac.FormatMoney(t.Amount)
}
