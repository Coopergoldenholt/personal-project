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
	<Router>
		<Provider store={store}>
			<StripeProvider apiKey="pk_test_lIIjmPXDC14Z7iLy9f80FgWz">
				<App />
			</StripeProvider>
		</Provider>
	</Router>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
