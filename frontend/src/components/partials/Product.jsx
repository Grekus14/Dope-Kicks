import React from "react";

function Product(props) {
	return (
		<li className="product">
			<a href={"http://localhost:3000/product/" + props.id} className="product-link">
				<img
					src={require("../../images/products/" + props.imgName)}
					alt="product image"
				/>
				<div>
					<p className="product-name">{props.name}</p>
					<p className="product-price">${props.price}.00</p>
				</div>
			</a>
		</li>
	);
}

export default Product;
