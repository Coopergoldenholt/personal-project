import React, { Component } from "react";
import { getUser } from "../../ducks/reducers/userReducer";
import { getRevenueExpense } from "../../ducks/reducers/wizardReducers/revenueReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import RevenueDisplay from "../Display/RevenueDisplay";
import HomeDisplay from "../Display/HomeDisplay";
import DailyLivingDisplay from "../Display/DailyLivingDisplay";
import TransportationDisplay from "../Display/TransportationDisplay";
import EntertainmentDisplay from "../Display/EntertainmentDisplay";
import HealthDisplay from "../Display/HealthDisplay";
import VacationDisplay from "../Display/VacationDisplay";

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			userId: 7,
			genId: 1
		};
	}
	componentDidMount() {
		this.props.getUser();

		this.props.getRevenueExpense(7);
	}
	render() {
		const { revenue } = this.props.revenue;
		const revenueExpenses = revenue.filter(ele => {
			return ele.gen_id === 1;
		});
		const revenueDisplay = revenueExpenses.map(ele => {
			return <RevenueDisplay key={ele.id} total={ele.total} name={ele.name} />;
		});
		const homeExpenses = revenue.filter(ele => {
			return ele.gen_id === 2;
		});
		const homeDisplay = homeExpenses.map(ele => {
			return <HomeDisplay key={ele.id} total={ele.total} name={ele.name} />;
		});
		const dailyLivingExpenses = revenue.filter(ele => {
			return ele.gen_id === 3;
		});
		const dailyLivingDisplay = dailyLivingExpenses.map(ele => {
			return (
				<DailyLivingDisplay key={ele.id} total={ele.total} name={ele.name} />
			);
		});
		const transportationExpenses = revenue.filter(ele => {
			return ele.gen_id === 4;
		});
		const transportationDisplay = transportationExpenses.map(ele => {
			return (
				<TransportationDisplay key={ele.id} total={ele.total} name={ele.name} />
			);
		});
		const entertainmentExpenses = revenue.filter(ele => {
			return ele.gen_id === 5;
		});
		const entertainmentDisplay = entertainmentExpenses.map(ele => {
			return (
				<EntertainmentDisplay key={ele.id} total={ele.total} name={ele.name} />
			);
		});
		const healthExpenses = revenue.filter(ele => {
			return ele.gen_id === 6;
		});
		const healthDisplay = healthExpenses.map(ele => {
			return <HealthDisplay key={ele.id} total={ele.total} name={ele.name} />;
		});
		const vacationExpenses = revenue.filter(ele => {
			return ele.gen_id === 7;
		});
		const vacationDisplay = vacationExpenses.map(ele => {
			return <VacationDisplay key={ele.id} total={ele.total} name={ele.name} />;
		});

		const { error, redirect, loading } = this.props.user;
		if (error || redirect) return <Redirect to="/auth/login" />;
		if (loading) return <div>Loading</div>;

		return (
			<div>
				{revenueDisplay}
				{homeDisplay}
				{dailyLivingDisplay}
				{transportationDisplay}
				{entertainmentDisplay}
				{healthDisplay}
				{vacationDisplay}
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { user, revenue } = state;
	return {
		user,
		revenue
	};
};

export default connect(mapStateToProps, { getUser, getRevenueExpense })(
	Dashboard
);
