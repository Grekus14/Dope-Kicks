import React, { useState } from "react";
import Axios from "axios";

function Navbar() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	Axios.get("http://localhost:5000/user/status", {
		withCredentials: true
	})
		.then(res => {
			setLoggedIn(res.data.authenticated);
		})
		.catch(err => console.log(err));

	function handleLogout() {
		console.log("handleLogout() called");

		Axios.post(
			"http://localhost:5000/user/logout",
			{},
			{
				withCredentials: true
			}
		)
			.then(res => {
				console.log(res.data);
			})
			.catch(err => console.log(err));
		window.location.reload();
	}

	function toggleMenu() {
		setMenuOpen(!menuOpen);
	}

	return (
		<nav>
			<div className="logo">
				<a href="http://localhost:3000">
					<img src={require("../../images/other/Logo.svg")} alt="Logo" />
				</a>
			</div>
			<div className="navigation">
				<a className="hide-desktop" onClick={toggleMenu}>
					<img
						className="hamburger "
						src={require("../../images/other/Hamburger.svg")}
						alt="Menu"
					/>
				</a>

				<ul className={menuOpen ? "nav-items" : "hide-mobile nav-items"}>
					<img
						onClick={toggleMenu}
						className="close-menu hide-desktop"
						src={require("../../images/other/close.svg")}
						alt="close menu"
					/>

					<li>
						<a href="http://localhost:3000/">Home</a>
					</li>
					<li>
						<a href="http://localhost:3000/orders">Orders</a>
					</li>
					<li>
						{loggedIn ? (
							<a onClick={handleLogout} className="logout-btn">
								Logout
							</a>
						) : (
							<a id="sign-up" href="http://localhost:3000/register">
								Sign Up
							</a>
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
