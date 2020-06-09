import React from "react";
import Axios from "axios";

function InspectProduct(props) {
	function purchase() {
		let data = {
			purchasedProduct: props.productName,
			purchasedProductPrice: props.price + ".00"
		};

		Axios.post("http://localhost:5000/orders/purchase", data, {
			withCredentials: true
		})
			.then(res => {
				alert(res.data);
			})
			.catch(err => {
				console.log(err);
				if (err.response.status === 401) {
					window.location.href = "http://localhost:3000/login";
				} else {
					alert("Oops! Something went wrong.");
				}
			});
	}

	return (
		<div className="main-product-content">
			<div className="product-image-container">
				<img src={require("../../images/products/" + props.imgName)} alt="product" />
			</div>
			<div className="product-details">
				<h2>{props.productName}</h2>
				<img
					src={require("../../images/other/Rating.png")}
					alt="rating stars"
					className="rating"
				/>
				<p className="description">{props.description}</p>
				<div>
					<p className="price">${props.price}.00</p>
					<button className="buy-button" onClick={purchase}>
						BUY NOW
					</button>
				</div>
			</div>
		</div>
	);
}

export default InspectProduct;
