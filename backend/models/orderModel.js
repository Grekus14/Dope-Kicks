const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	customerName: String,
	productName: String,
	productPrice: Number,
	orderDate: Date
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
