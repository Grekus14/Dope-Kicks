import React from "react";

//className="left-panel hide-mobile"

function SidePanel(props) {
	return (
		<div className={"left-panel hide-mobile" + (props.login ? "" : " panel-flip")}>
			{props.login ? (
				<h1>
					Welcome <br />
					Back
				</h1>
			) : (
				<h1>
					Create <br />
					Account
				</h1>
			)}

			<h2>
				Join millions of
				<br />
				users today
			</h2>
			<div>
				{props.login ? (
					<p>
						Don't have
						<br />
						an account?
					</p>
				) : (
					<p>
						Already have
						<br />
						an account?
					</p>
				)}

				<form
					action={
						props.login
							? "http://localhost:3000/register"
							: "http://localhost:3000/login"
					}
				>
					<button className="secondary-button" type="submit">
						{props.login ? "Sign Up" : "Sign In"}
					</button>
				</form>
			</div>
		</div>
	);
}

export default SidePanel;
