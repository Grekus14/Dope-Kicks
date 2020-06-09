import React from "react";

function Order(props) {
	return (
		<div className="order">
			<p>{props.id}</p>
			<p>{props.date}</p>
			<p>{props.customer}</p>
			<p>{props.product}</p>
			<p>{props.price}</p>
		</div>
	);
}

export default Order;
