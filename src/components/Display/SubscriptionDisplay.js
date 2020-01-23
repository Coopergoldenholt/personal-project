import React from "react";

function SubscriptionDisplay(props) {
	const { name, total, spending } = props;
	return (
		<div className="category-display">
			<h2 className="name-display">{name}</h2>
			<div className="budget-spent">
				<p className="allocated-budget-line">
					Allocated Budget: <span className="total">{total}</span>
				</p>
				<p className="spent-line">
					What You Have Spent: <span className="spending">{spending}</span>
				</p>
			</div>
		</div>
	);
}

export default SubscriptionDisplay;
