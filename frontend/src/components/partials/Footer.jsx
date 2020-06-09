import React from "react";

function Footer() {
	return (
		<footer>
			<div className="footer-branding hide-desktop">
				<img
					className="footer-logo"
					src={require("../../images/other/Logo.svg")}
					alt="logo"
				/>
				<p className="copyright-text">© Đorđe Popović</p>
			</div>
			<img
				className="footer-logo hide-mobile"
				src={require("../../images/other/Logo.svg")}
				alt="logo"
			/>
			<ul className="legal-text">
				<li>Privacy Policy</li>
				<li>Terms of Service</li>
				<li>Contact Us</li>
			</ul>
			<p className="copyright-text hide-mobile">© Đorđe Popović</p>
		</footer>
	);
}

export default Footer;
