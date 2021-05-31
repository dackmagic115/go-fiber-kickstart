package controllers

import (
	"github.com/dackmagic115/go-fiber-kickstart/models"
	"github.com/gofiber/fiber/v2"
)

func Hello(c *fiber.Ctx) error {
	user := models.User{
		FirstName: "John",
	}

	user.LastName = "Doe"

	return c.JSON(user)
}
