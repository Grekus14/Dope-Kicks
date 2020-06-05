const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: String,
	description: String,
	price: Number,
	imgName: String
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
