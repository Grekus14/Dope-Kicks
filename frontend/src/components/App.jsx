import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Homepage";
import OrdersPage from "./OrdersPage";
import ProductPage from "./ProductPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

function App() {
	return (
		<Router>
			<Route path="/" exact component={Homepage} />
			<Route path="/orders" component={OrdersPage} />
			<Route path="/product/:id" component={ProductPage} />
			<Route path="/login" component={LoginPage} />
			<Route path="/register" component={RegisterPage} />
		</Router>
	);
}

export default App;
