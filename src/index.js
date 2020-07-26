import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import ErrorBoundry from "./Components/App/ErrorBoundry/ErrorBoundry";
import App from "./Components/App/App";

const app = (
	<Provider store={store}>
		<ErrorBoundry>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ErrorBoundry>
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));
