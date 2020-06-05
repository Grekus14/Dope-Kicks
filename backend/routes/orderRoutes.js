const router = require("express").Router();
const Order = require("../models/orderModel");

router.route("/order-history").get((req, res) => {
	Order.find()
		.then(orders => {
			res.send(orders);
		})
		.catch(err => res.status(400).send(err));
});

router.route("/purchase").post((req, res) => {
	if (req.session.authenticated) {
		let newOrder = new Order({
			customerName: req.body.buyerUsername,
			productName: req.body.purchasedProduct,
			productPrice: req.body.purchasedProductPrice,
			orderDate: new Date()
		});
		alert("Thank you for shopping! You can view your order on the Order History page.");
		newOrder
			.save()
			.then(res.status(200).send("Order added to history."))
			.catch(err => res.send(err));
	} else {
		res.send("You must be logged in to purchase this item.");
	}
});

module.exports = router;
