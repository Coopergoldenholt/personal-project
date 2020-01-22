import React from "react";

function HomeDisplay(props) {
	const { name, total, spending } = props;
	return (
		<div>
			<h2>{name}</h2>
			<div>
				<p>Allocated Budget: {total}</p>
				<p>What You Have Spent: {spending}</p>
			</div>
		</div>
	);
}

export default HomeDisplay;
