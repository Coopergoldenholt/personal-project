import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./ducks/store";
import { HashRouter as Router } from "react-router-dom";
import { StripeProvider } from "react-stripe-elements";

ReactDOM.render(
	<StripeProvider apiKey="pk_live_uS9TlGpXu25gJ83vtNfIBrib">
		<Router>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
	</StripeProvider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
