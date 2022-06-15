package donasi

type DonationFormatter struct {
	ID               int    `json:"id"`
	UserID           int    `json:"user_id"`
	Nama             string `json:"name"`
	DeskripsiSingkat string `json:"deskripsi_singkat"`
	ImageURL         string `json:"image_url"`
	GoalAmount       int    `json:"goal_amount"`
	CurrentAmount    int    `json:"current_amount"`
	Slug             string `json:"slug"`
}

func FormatDonation(donation Donation) DonationFormatter {
	donationFormatter := DonationFormatter{}
	donationFormatter.ID = donation.ID
	donationFormatter.UserID = donation.UserID
	donationFormatter.Nama = donation.Nama
	donationFormatter.DeskripsiSingkat = donation.DeskripsiSingkat
	donationFormatter.GoalAmount = donation.GoalAmount
	donationFormatter.CurrentAmount = donation.CurrentAmount
	donationFormatter.Slug = donation.Slug
	donationFormatter.ImageURL = ""

	if len(donation.DonationImages) > 0 {
		donationFormatter.ImageURL = donation.DonationImages[0].Filename
	}

	return donationFormatter
}

func FormatDonations(donations []Donation) []DonationFormatter {
	donationsFormatter := []DonationFormatter{}

	for _, donation := range donations {
		donationFormatter := FormatDonation(donation)
		donationsFormatter = append(donationsFormatter, donationFormatter)
	}

	return donationsFormatter
}
