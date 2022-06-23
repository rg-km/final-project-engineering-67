package transaction

import (
	"errors"
	"final-project-engineering-67/donasi"
)

type Service interface {
	GetTransactionsByDonationID(input GetDonationTransactionsInput) ([]Transaction, error)
}

type service struct {
	repository         Repository
	donationRepository donasi.Repository
}

func NewService(repository Repository, donationRepository donasi.Repository) *service {
	return &service{repository, donationRepository}
}

func (s *service) GetTransactionsByDonationID(input GetDonationTransactionsInput) ([]Transaction, error) {
	donation, err := s.donationRepository.GetByID(input.ID)
	if err != nil {
		return []Transaction{}, err
	}

	if donation.UserID != input.User.ID {
		return []Transaction{}, errors.New("ini bukan donasi milik anda")
	}

	transactions, err := s.repository.GetByDonationID(input.ID)
	if err != nil {
		return transactions, err
	}

	return transactions, nil
}
