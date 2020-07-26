import React from "react";
import { withRouter } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = ({ history }) => (
	<div className="wrap-error">
		<div className="error-page">
			<h1>404</h1>
			<h3>Sorry, the page you visited does not exist.</h3>
			<button onClick={() => history.push("/")}>
				<span>Back Home</span>
			</button>
		</div>
	</div>
);

export default withRouter(ErrorPage);
