import React, { Component } from "react";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";
import { getSumExpenses } from "../../ducks/reducers/expensesReducer";

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
		const { totalSums } = this.props.revenue;
		console.log(totalSums);
		this.props.getSumExpenses(userId);
	}
	render() {
		const { totalSums } = this.props.revenue;
		let sumArr = totalSums.map(ele => {
			return +ele.sum;
		});

		console.log(sumArr);

		return (
			<div>
				<Bar
					data={{
						labels: this.state.labels,
						datasets: [
							{
								label: "Money Spent",
								backgroundColor: "rgba(75,192,192,1)",
								borderColor: "rgba(0,0,0,1)",
								borderWidth: 2,
								data: sumArr
							}
						]
					}}
					options={{
						title: {
							display: true,
							text: "Monthly Spending Habits",
							fontSize: 20
						},
						legend: {
							display: true,
							position: "right"
						}
					}}
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

export default connect(mapStateToProps, { getSumExpenses })(BarChart);
