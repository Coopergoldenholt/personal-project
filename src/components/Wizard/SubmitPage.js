import React from "react";
import { Link } from "react-router-dom";

function SubmitPage() {
	return (
		<div>
			<p>THANK YOU</p>
			<Link to="/dashboard">
				<button>Dashboard</button>
			</Link>
		</div>
	);
}
export default SubmitPage;
