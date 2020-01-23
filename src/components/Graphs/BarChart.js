import React, { Component } from "react";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";
import {
	getSumExpenses,
	getSumSpending
} from "../../ducks/reducers/expensesReducer";

class BarChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			labels: [
				"Revenue",
				"Home",
				"Daily Living",
				"Transportation",
				"Entertainment",
				"Health",
				"Vacation",
				"Recreation",
				"Subscriptions",
				"Personal",
				"Financial Obligations"
			]
		};
	}
	componentDidMount() {
		const { id } = this.props.user.user;
		const userId = id;
		this.props.getSumExpenses(userId);
		this.props.getSumSpending(userId);
	}
	render() {
		const { totalSums, spendingSums } = this.props.revenue;
		let sumBudget = totalSums.map(ele => {
			return +ele.sum;
		});
		let sumSpending = spendingSums.map(ele => {
			return +ele.sum;
		});

		return (
			<div className="canvas-container">
				<Bar
					data={{
						labels: this.state.labels,
						datasets: [
							{
								label: "Budget Set",
								backgroundColor: "#777B7E",
								borderColor: "rgba(0,0,0,1)",
								borderWidth: 2,
								data: sumBudget
							},
							{
								label: "Money Spent/Made",
								backgroundColor: "rgba(75,192,192,1)",
								borderColor: "rgba(0,0,0,1)",
								borderWidth: 2,
								data: sumSpending
							}
						]
					}}
					options={{
						title: {
							display: true,
							text: "Budget Compared To Actual",
							fontSize: 20
						},
						legend: {
							display: true,
							position: "top"
						},
						responsive: true,
						maintainAspectRatio: true
					}}
					width="auto"
					height="auto"
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { revenue, user } = state;
	return {
		revenue,
		user
	};
};

export default connect(mapStateToProps, { getSumExpenses, getSumSpending })(
	BarChart
);
