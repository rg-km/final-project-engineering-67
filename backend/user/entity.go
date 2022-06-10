package user

import (
	"time"
)

type User struct {
	ID            int
	Nama          string
	Pekerjaan     string
	Email         string
	Password      string
	Image_profile string
	Role          string
	CreatedAt     time.Time
	UpdatedAt     time.Time
}
