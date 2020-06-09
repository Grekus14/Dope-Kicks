import React from "react";
import Navbar from "./partials/Navbar";
import ProductList from "./partials/ProductList";
import Footer from "./partials/Footer";

function Homepage() {
	return (
		<div>
			<Navbar />
			<ProductList />
			<Footer />
		</div>
	);
}

export default Homepage;
