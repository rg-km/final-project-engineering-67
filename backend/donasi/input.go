package donasi

import "final-project-engineering-67/user"

type GetDonationDetailInput struct {
	ID int `uri:"id" binding:"required"`
}

type CreateDonationInput struct {
	Nama             string `json:"nama" binding:"required"`
	DeskripsiSingkat string `json:"deskripsi_singkat" binding:"required"`
	Deskripsi        string `json:"deskripsi" binding:"required"`
	GoalAmount       int    `json:"goal_amount" binding:"required"`
	Perks            string `json:"perks" binding:"required"`
	User             user.User
}
