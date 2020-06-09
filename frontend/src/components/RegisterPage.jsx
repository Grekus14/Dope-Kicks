import React from "react";
import SidePanel from "./partials/login&register/SidePanel";
import MainPanel from "./partials/login&register/MainPanel";

function RegisterPage() {
	return (
		<div class="login-container">
			<a class="back-button" href="http://localhost:3000">
				Back
			</a>
			<MainPanel login={false} />
			<SidePanel login={false} />
		</div>
	);
}

export default RegisterPage;
