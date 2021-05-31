package routes

import (
	"github.com/dackmagic115/go-fiber-kickstart/controllers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Get("/", controllers.Hello)
	app.Get("/Other", controllers.Other)

}
