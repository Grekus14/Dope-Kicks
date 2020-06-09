const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const mainRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		saveUninitialized: false,
		resave: false
	})
);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true
});
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB ATLAS connection established successfully");
});

app.use("/", mainRoutes);
app.use("/user/", userRoutes);
app.use("/orders/", orderRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	app.use(express.static("frontend/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
	});
}

app.listen(5000, () => {
	console.log("Server running on port 5000");
});
