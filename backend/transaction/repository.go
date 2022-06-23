package transaction

import "gorm.io/gorm"

type Repository interface {
	GetByDonationID(donationID int) ([]Transaction, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) GetByDonationID(donationID int) ([]Transaction, error) {
	var transactions []Transaction

	err := r.db.Preload("User").Where("donation_id = ?", donationID).Order("id desc").Find(&transactions).Error
	if err != nil {
		return transactions, err
	}

	return transactions, nil
}
