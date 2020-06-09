import React, { useState } from "react";
import Order from "./Order";
import Axios from "axios";

function OrdersContainer() {
	Axios.get("http://localhost:5000/orders/order-history")
		.then(result => {
			setOrders(result.data.reverse());
		})
		.catch(err => console.log(err));
	const [orders, setOrders] = useState([]);

	return (
		<div className="order-history-container">
			<div className="labels hide-mobile">
				<h2>Order ID</h2>
				<h2>Customer</h2>
				<h2>Product</h2>
				<h2>Price</h2>
				<h2>Date</h2>
			</div>
			<div className="order-list-container">
				{orders.map(order => (
					<Order
						id={order._id}
						customer={order.customerName}
						product={order.productName}
						price={order.productPrice}
						date={order.orderDate}
					/>
				))}
			</div>
		</div>
	);
}

export default OrdersContainer;
