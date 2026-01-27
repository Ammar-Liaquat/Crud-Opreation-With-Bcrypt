const express = require("express")
const routes = express.Router()
routes.use(express.json())
const middelware = require("../middelware/Auth")
const { buyproduct } = require("../controllers/buyControlles")


routes.get("/buyproduct",middelware, buyproduct)

module.exports = routes
