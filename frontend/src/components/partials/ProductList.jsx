import React, { useState } from "react";
import Product from "./Product";
import Axios from "axios";

function ProductList() {
	Axios.get("http://localhost:5000/products")
		.then(response => {
			setProducts(response.data);
		})
		.catch(err => console.log(err));

	const [products, setProducts] = useState([]);

	return (
		<div className="content">
			<div className="gradient-background"></div>
			<div className="fadeout-background"></div>
			<h1 className="cta hide-desktop">
				DISCOVER
				<br />
				TODAY'S DEALS
			</h1>
			<h1 className="cta hide-mobile">DISCOVER TODAY'S DEALS</h1>
			<div className="main-container">
				<ul className="products">
					{products.map(product => (
						<Product
							id={product._id}
							key={product._id}
							imgName={product.imgName}
							name={product.name}
							price={product.price}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ProductList;
