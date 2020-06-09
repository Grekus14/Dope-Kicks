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
			res.status(201).send("User added: " + newUser.username);
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
					res.status(200).send("Success! You are now logged in.");
				} else {
					res.status(401).send("Incorrect password.");
				}
			});
		} else {
			res.status(404).send("Incorrect username.");
		}
	});
});

router.route("/status").get((req, res) => {
	let data = {
		authenticated: req.session.authenticated,
		username: req.session.currentUsername
	};

	res.send(data);
});

router.route("/logout").post((req, res) => {
	req.session.authenticated = false;
	req.session.currentUsername = null;
	res.send(req.session);
});

module.exports = router;
