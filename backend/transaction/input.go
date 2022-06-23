package transaction

import "final-project-engineering-67/user"

type GetDonationTransactionsInput struct {
	ID   int `uri:"id" binding:"required"`
	User user.User
}
