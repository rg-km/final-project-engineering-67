package donasi

import "time"

type Donation struct {
	ID               int
	UserID           int
	Nama             string
	DeskripsiSingkat string
	Deskripsi        string
	Perks            string
	DonaturCount     int
	GoalAmount       int
	CurrentAmount    int
	Slug             string
	CreatedAt        time.Time
	UpdatedAt        time.Time
	DonationImages   []DonationImage
}

type DonationImage struct {
	ID         int
	DonationID int
	Filename   string
	IsPrimary  int
	CreatedAt  time.Time
	UpdatedAt  time.Time
}
