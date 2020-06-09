import React, { useState } from "react";
import Navbar from "./partials/Navbar";
import InspectProduct from "./partials/InspectProduct";
import { useParams } from "react-router-dom";
import Axios from "axios";

function ProductPage() {
	let { id } = useParams();
	Axios.get("http://localhost:5000/inspect/" + id)
		.then(response => {
			setDetails(response.data);
		})
		.catch(err => console.log(err));

	const [details, setDetails] = useState({ imgName: "placeholder.svg" });

	return (
		<div>
			<Navbar />
			<InspectProduct
				imgName={details.imgName}
				productName={details.name}
				description={details.description}
				price={details.price}
			/>
		</div>
	);
}

export default ProductPage;
