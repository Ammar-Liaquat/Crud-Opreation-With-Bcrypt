const productModels = require("../models/productModels");
const Product = require("../models/productModels");

const createproduct = async (req, res) => {
  try {
    const usid = req.user.id;
    const { name, price, stock } = req.body;
    const product = await Product.create({
      userid: usid,
      name,
      price,
      stock,
    });
    res.status(201).json({
      message: "product create successfully",
      code: 201,
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

const getproduct = async (req, res) => {
  try {
    const userId = req.user.id;
    const product = await Product.find({ userid: userId });
    res.status(200).json({
      message: " user product fetched succesfully",
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

const getallproduct = async (req, res) => {
  try {
    const product = await Product.find();

    let page = Number(req.query.page) || 1
    let limit = Number(req.query.limit) || 3

    let startIndex = (page - 1) * limit
    let endIndex = page * limit

    let results = product.slice(startIndex,endIndex)
    
    res.status(200).json({
      message: "all product fetched succesfully",
      code: 200,
      page,
      limit,
      total: product.length,
      data:results
    });
  } catch (error) {
    res.status(200).json({
      message: "Internal server error",
      code: 200,
      error: error.message,
    });
  }
};
const editproduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );
    res.status(200).json({
      message: "product update sucessfully",
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
const deleteproduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(
      req.params.id,
      { $set: req.body },
      { new: true },
    );
    res.status(200).json({
      message: "product update sucessfully",
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
  createproduct,
  getproduct,
  getallproduct,
  editproduct,
  deleteproduct,
};
