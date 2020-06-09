import React from "react";
import Navbar from "./partials/Navbar";
import Orders from "./partials/OrdersContainer";
import Footer from "./partials/Footer";

function OrdersPage() {
	return (
		<div>
			<Navbar />
			<h1 className="order-history-title">Order History</h1>
			<Orders />
			<Footer />
		</div>
	);
}

export default OrdersPage;
