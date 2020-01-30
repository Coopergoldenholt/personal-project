import React from "react";
import { connect } from "react-redux";
import Axios from "axios";

function HomeDisplay(props) {
	const { name, total, spending, amount, id } = props;
	const { showCharges } = props.revenue;
	const handleDelete = (id, amount) => {
		Axios.delete(`/api/expenses/${id}?charge=${amount}`).then(res =>
			alert("Charge Deleted")
		);
	};
	return (
		<div>
			{!showCharges ? (
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
			) : (
				<div className="category-display">
					<h2 className="name-display">{name}</h2>
					<div className="budget-spent">
						<p className="spent-line">
							Charge: <span className="spending">{amount}</span>
						</p>
						<button
							className="display-delete-button"
							onClick={() => handleDelete(id, amount)}
						>
							Delete?
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

const mapStateToProps = state => {
	const { user, revenue } = state;
	return {
		user,
		revenue
	};
};

export default connect(mapStateToProps)(HomeDisplay);
