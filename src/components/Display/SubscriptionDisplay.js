import React from "react";

function SubscriptionDisplay(props) {
	const { name, total } = props;
	return (
		<div>
			<h2>{name}:</h2>
			<div>
				<h2>{total}</h2>
			</div>
		</div>
	);
}

export default SubscriptionDisplay;
