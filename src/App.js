import React from "react";
import routes from "./routes";
import Nav from "./components/Nav/Nav";
import "./cssReset.css";

function App() {
	return (
		<div className="App">
			<Nav />
			{routes}
		</div>
	);
}

export default App;
