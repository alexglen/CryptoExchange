import React from "react";
import { Switch, Route } from "react-router-dom";

import FirstPage from "./FirstPage/FirstPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import SecondPage from "./SecondPage/SecondPage";
import "./App.css";

const App = () => (
	<div className="app">
		<Switch>
			<Route path="/" component={FirstPage} exact />
			<Route path="/charts" component={SecondPage} />
			<Route render={() => <ErrorPage />} />
		</Switch>
	</div>
);

export default App;
