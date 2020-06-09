import React, { useState } from "react";
import Axios from "axios";

function MainPanel(props) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function handleLogin() {
		const data = {
			username: username,
			password: password
		};
		Axios.post("http://localhost:5000/user/login", data, { withCredentials: true })
			.then(res => {
				alert(res.data);
				window.location = "http://localhost:3000";
			})
			.catch(err => {
				alert(err.response.data);
				setPassword("");
			});
	}

	function handleSignup() {
		const data = {
			username: username,
			password: password
		};

		Axios.post("http://localhost:5000/user/register", data, {
			withCredentials: true
		})
			.then(res => {
				console.log(res.data);
				window.location = "http://localhost:3000";
			})
			.catch(err => {
				console.log(err);
				window.location.reload();
			});
	}

	function handleUsernameChange(event) {
		setUsername(event.target.value);
	}

	function handlePasswordChange(event) {
		setPassword(event.target.value);
	}

	return (
		<div className="main-panel">
			<img
				className="login-logo"
				src={require("../../../images/other/Logo Dark.svg")}
				alt="logo"
			/>
			{props.login ? <h1>Sign In</h1> : <h1>Get Started</h1>}
			<input
				type="text"
				name="username"
				autocomplete="off"
				placeholder="Username"
				maxLength="16"
				value={username}
				onChange={handleUsernameChange}
				required
			/>
			<input
				value={password}
				onChange={handlePasswordChange}
				type="password"
				name="password"
				placeholder="Password"
				required
			/>
			<a href="#" className="forgot-password">
				{props.login ? "Forgot password?" : "Terms of Srvice"}
			</a>
			<button
				className="main-button"
				onClick={props.login ? handleLogin : handleSignup}
			>
				{props.login ? "Login" : "Sign Up"}
			</button>
			<div className="hide-desktop switch-login">
				<p>{props.login ? "Don't" : "Already"} have an account?</p>
				<a href={props.login ? "/register" : "/login"}>
					Sign {props.login ? "up" : "in"} now!
				</a>
			</div>
		</div>
	);
}

export default MainPanel;
