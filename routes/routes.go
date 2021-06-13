package routes

import (
	"github.com/dackmagic115/go-fiber-kickstart/controllers"
	"github.com/dackmagic115/go-fiber-kickstart/middleware"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Get("/", controllers.Hello)
	app.Post("/api/register", controllers.Register)
	app.Post("/api/login", controllers.Login)

	app.Use(middleware.IsAuthenticated)

	app.Get("/api/user", controllers.User)
	app.Post("/api/logout", controllers.Logout)
	app.Get("/Other", controllers.Other)

	app.Get("/api/users", controllers.AllUsers)

}
