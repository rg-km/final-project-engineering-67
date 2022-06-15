package donasi

type Service interface {
	GetDonasi(userID int) ([]Donation, error)
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
