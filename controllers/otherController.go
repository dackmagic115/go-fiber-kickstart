package controllers

import (
	"fmt"
	"strconv"

	"github.com/dackmagic115/go-fiber-kickstart/models"
	"github.com/gofiber/fiber/v2"
)

func Other(c *fiber.Ctx) error {
	return c.SendString("Other Controller")
}

func TestMake(c *fiber.Ctx) error {
	var dto fiber.Map

	if err := c.BodyParser(&dto); err != nil {
		return err
	}

	list := dto["permissions"].([]interface{})

	permissions := make([]models.Permission, len(list))

	// fmt.Print(permissions)

	for i, permissionId := range list {
		id, _ := strconv.Atoi(permissionId.(string))
		fmt.Print(permissionId)
		permissions[i] = models.Permission{
			Id: uint(id),
		}
	}

	// fmt.Print(permissions)

	// return c.JSON(&permissions)

	return c.JSON(permissions)

}
