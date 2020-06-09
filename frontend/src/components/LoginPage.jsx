import React from "react";
import SidePanel from "./partials/login&register/SidePanel";
import MainPanel from "./partials/login&register/MainPanel";

function LoginPage() {
	return (
		<div class="login-container">
			<a class="back-button" href="http://localhost:3000">
				Back
			</a>
			<SidePanel login={true} />
			<MainPanel login={true} />
		</div>
	);
}

export default LoginPage;
