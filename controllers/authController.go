package controllers

import (
	"github.com/dackmagic115/go-fiber-kickstart/database"
	"github.com/dackmagic115/go-fiber-kickstart/models"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func Hello(c *fiber.Ctx) error {
	user := models.User{
		FirstName: "John",
	}

	user.LastName = "Doe"

	return c.JSON(user)
}

func Register(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	if data["password"] != data["password_confirm"] {
		c.Status(400)
		return c.JSON(fiber.Map{
			"message": "passwords do not match",
		})
	}

	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)

	user := models.User{
		FirstName: data["first_name"],
		LastName:  data["last_name"],
		Email:     data["email"],
		Password:  password,
	}

	database.DB.Create(&user)

	return c.JSON(user)

}
