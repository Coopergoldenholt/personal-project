import React, { Component } from "react";
import { connect } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import {
	getSumExpenses,
	getSumSpending
} from "../../ducks/reducers/expensesReducer";

class DonutChart extends Component {
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
		const { spendingSums } = this.props.revenue;
		let sumSpending = spendingSums.map(ele => {
			console.log(ele);
			return +ele.sum;
		});
		console.log(sumSpending);

		return (
			<div className="canvas-container">
				<Doughnut
					data={{
						labels: [
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
						],
						datasets: [
							{
								data: [
									sumSpending[1],
									sumSpending[2],
									sumSpending[3],
									sumSpending[4],
									sumSpending[5],
									sumSpending[6],
									sumSpending[7],
									sumSpending[8],
									sumSpending[9],
									sumSpending[10]
								],
								backgroundColor: [
									"#FF6384",
									"#36A2EB",
									"#FFCE56",
									"#ffd666",
									"#abff66",
									"#66ffc7",
									"#66e3ff",
									"#8f66ff",
									"#f766ff",
									"#66b3ff"
								],
								hoverBackgroundColor: [
									"#FF6384",
									"#36A2EB",
									"#FFCE56",
									"#ffd666",
									"#abff66",
									"#66ffc7",
									"#66e3ff",
									"#8f66ff",
									"#f766ff",
									"#66b3ff"
								]
							}
						],
						text: "23%"
					}}
					options={{
						title: {
							display: true,
							text: "Monthly Spending Habits",
							fontSize: 20
						}
					}}
					// options={{
					// 	title: {
					// 		display: true,
					// 		text: "Monthly Spending Habits",
					// 		fontSize: 20
					// 	},
					// 	legend: {
					// 		display: true,
					// 		position: "top"
					// 	},
					// 	responsive: true,
					// 	maintainAspectRatio: true
					// }}
					// width="auto"
					// height="auto"
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
	DonutChart
);
