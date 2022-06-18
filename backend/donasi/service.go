package donasi

import (
	"fmt"

	"github.com/gosimple/slug"
)

type Service interface {
	GetDonasi(userID int) ([]Donation, error)
	GetDonasiByID(input GetDonationDetailInput) (Donation, error)
	CreateDonation(input CreateDonationInput) (Donation, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) GetDonasi(userID int) ([]Donation, error) {
	if userID != 0 {
		donations, err := s.repository.GetByUserID(userID)
		if err != nil {
			return donations, err
		}

		return donations, nil
	}

	donations, err := s.repository.GetAll()
	if err != nil {
		return donations, err
	}

	return donations, nil
}

func (s *service) GetDonasiByID(input GetDonationDetailInput) (Donation, error) {
	donation, err := s.repository.GetByID(input.ID)
	if err != nil {
		return donation, err
	}

	return donation, nil
}

func (s *service) CreateDonation(input CreateDonationInput) (Donation, error) {
	donation := Donation{}
	donation.Nama = input.Nama
	donation.DeskripsiSingkat = input.DeskripsiSingkat
	donation.Deskripsi = input.Deskripsi
	donation.GoalAmount = input.GoalAmount
	donation.Perks = input.Perks
	donation.UserID = input.User.ID

	// pembuatan slug
	slugCandidate := fmt.Sprintf("%s %d", input.Nama, input.User.ID)
	donation.Slug = slug.Make(slugCandidate)

	newDonation, err := s.repository.Save(donation)
	if err != nil {
		return newDonation, err
	}

	return newDonation, nil
}
