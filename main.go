package main

import (
	"github.com/dackmagic115/go-fiber-kickstart/database"
	"github.com/dackmagic115/go-fiber-kickstart/routes"
	"github.com/gofiber/fiber/v2"
)

func main() {
	database.Connect()
	app := fiber.New()

	routes.Setup(app)

	app.Listen(":3000")
}
