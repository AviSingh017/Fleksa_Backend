const express = require("express");
const Route = express.Router();
const { FleksaModel } = require("../models/fleksa.model.js");

Route.get('/products', async (req, res) => {
  try {
    const products = await FleksaModel.find();
    res.status(200).send(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ "error": "Failed to fetch Products" });
  }
});

Route.post('/add/product', async (req, res) => {
  const { title, image, description, rating, price } = req.body;

  const newProduct = new FleksaModel({
    title,
    image,
    description,
    rating,
    price,
  });

  try {
    await newProduct.save();
    res.status(200).send({ "msg": "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ "error": "Failed to add new product" });
  }
});

Route.put('/product/:id', async (req, res) => {
  const productId = req.params.id;

  const { title, image, description, rating, price } = req.body;
  try {
    const updatedProduct = await FleksaModel.findByIdAndUpdate(productId, {
      title,
      image,
      description,
      rating,
      price
    },);

    if (updatedProduct) {
      res.status(200).send({ "msg": "Product updated successfully" });
    } else {
      res.status(404).json({ "error": "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ "error": "Failed to update the product" });
  }
});

Route.delete('/product/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    await FleksaModel.findByIdAndDelete(productId);
    res.send({ "msg": "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ "error": "Failed to delete product" });
  }
});

module.exports = {
  Route
}