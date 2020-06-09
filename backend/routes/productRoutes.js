const router = require("express").Router();
let Product = require("../models/productModel");

router.route("/products").get((req, res) => {
	Product.find()
		.then(products => {
			res.send(products);
		})
		.catch(err => res.status(400).send(err));
});

router.route("/inspect/:targetId").get((req, res) => {
	Product.findById(req.params.targetId).then(product => {
		if (product) {
			res.send(product);
		} else {
			res.send(false);
		}
	});
});

module.exports = router;
