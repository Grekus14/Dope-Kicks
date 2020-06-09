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
	let currentDay = new Date().getDate() + "";
	let currentMonth = new Date().getMonth() + "";
	currentDay = currentDay.length < 2 ? "0" + currentDay : currentDay;
	currentMonth = currentMonth.length < 2 ? "0" + currentMonth : currentMonth;

	if (req.session.authenticated) {
		let newOrder = new Order({
			customerName: req.session.currentUsername,
			productName: req.body.purchasedProduct,
			productPrice: req.body.purchasedProductPrice,
			orderDate: `${currentDay}.${currentMonth}.${new Date().getFullYear()} ${new Date().toLocaleTimeString()}`
		});
		newOrder
			.save()
			.then(res.status(200).send("Thanks for shopping! Your order will arrive soon."))
			.catch(err => res.send(err));
	} else {
		res.status(401).send("User not logged in.");
	}
});

module.exports = router;
