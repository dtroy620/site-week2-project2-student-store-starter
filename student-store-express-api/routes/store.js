const express = require("express");
const { store } = require("../models/store")
const storeRoute = express.Router();

storeRoute.get("/", (req, res) => {
    const products = store.getAllProducts();
    res.status(200).json({ products:products})
})

storeRoute.get("/:id", (req, res) => {
    const product = store.getProductsById(req.params.id);
    res.status(200).json({product: product});
})

module.exports = storeRoute;