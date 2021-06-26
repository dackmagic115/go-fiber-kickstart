package controllers

import (
	"strconv"

	"github.com/dackmagic115/go-fiber-kickstart/database"
	"github.com/dackmagic115/go-fiber-kickstart/models"
	"github.com/dackmagic115/go-fiber-kickstart/util"
	"github.com/gofiber/fiber/v2"
)

func AllOrders(c *fiber.Ctx) error {
	page, _ := strconv.Atoi(c.Query("page", "1"))

	return c.JSON(util.Paginate(database.DB, &models.Order{}, page))
}
