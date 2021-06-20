package models

type Role struct {
	Id         uint         `json:"id"`
	Name       string       `json:"Name"`
	Permission []Permission `json:"permission" gorm:"many2many:role_permissions"`
}
