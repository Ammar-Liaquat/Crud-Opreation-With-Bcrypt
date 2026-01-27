const express = require("express")
const routes = express.Router()

const productRoutes = require("./userProductRoutes")
const usersRoutes = require("./userRoutes")
const buyRoutes = require("./buyRoutes")

routes.use("/", usersRoutes)
routes.use("/", productRoutes)
routes.use("/", buyRoutes)

module.exports = routes