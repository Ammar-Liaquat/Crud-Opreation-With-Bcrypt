const jwt = require("jsonwebtoken")
const buyProduct = require("../models/buyModels")
const Product = require("../models/productModels")


const buyproduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({
      message: "product fethed successfully",
      code: 200,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      code: 500,
      error: error.message,
    });
  }
};

module.exports = {
    buyproduct
}