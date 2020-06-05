const router = require("express").Router();
const bcrypt = require("bcrypt");
let User = require("../models/userModel");

router.route("/register").post(async (req, res) => {
	const username = req.body.username;
	const hashedPassword = await bcrypt.hash(req.body.password, 10);
	const newUser = new User({
		username: username,
		password: hashedPassword
	});
	newUser
		.save()
		.then(() => {
			req.session.authenticated = true;
			req.session.currentUsername = newUser.username;
			res.status(201).send("User added: " + newUser);
		})
		.catch(err => res.send(err));
});

router.route("/login").post((req, res) => {
	User.findOne({ username: req.body.username }).then(user => {
		if (user) {
			bcrypt.compare(req.body.password, user.password, (err, result) => {
				if (result) {
					req.session.authenticated = true;
					req.session.currentUsername = user.username;
					res.send("Success!");
				} else {
					res.send("Incorrect password.");
				}
			});
		} else {
			res.send("User not found");
		}
	});
});

router.route("/logout").post((req, res) => {
	req.session.authenticated = false;
	req.session.currentUsername = null;
	res.send("Logged out");
});

module.exports = router;
