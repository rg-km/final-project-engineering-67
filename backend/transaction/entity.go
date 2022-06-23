package transaction

import (
	"final-project-engineering-67/user"
	"time"
)

type Transaction struct {
	ID         int
	DonationID int
	UserID     int
	Amount     int
	Status     string
	PaymentURL string
	User       user.User
	CreatedAt  time.Time
	UpdatedAt  time.Time
}
