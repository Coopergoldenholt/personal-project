import React, { Component } from "react";
import {
	getUser,
	toggelEditFalse,
	toggelEditTrue
} from "../../ducks/reducers/userReducer";
import { getExpenses } from "../../ducks/reducers/expensesReducer";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import RevenueDisplay from "../Display/RevenueDisplay";
import HomeDisplay from "../Display/HomeDisplay";
import DailyLivingDisplay from "../Display/DailyLivingDisplay";
import TransportationDisplay from "../Display/TransportationDisplay";
import EntertainmentDisplay from "../Display/EntertainmentDisplay";
import HealthDisplay from "../Display/HealthDisplay";
import VacationDisplay from "../Display/VacationDisplay";
import RecreationDisplay from "../Display/RecreationDisplay";
import SubscriptionDisplay from "../Display/SubscriptionDisplay";
import PersonalDisplay from "../Display/PersonalDisplay";
import ObligationsDisplay from "../Display/ObligationsDisplay";
import BarChart from "../Graphs/BarChart";
import "./Dashboard.scss";

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			userId: 0,
			genId: 0
		};
	}
	componentDidMount() {
		const { id } = this.props.user.user;
		this.props.getUser();
		this.props.getExpenses(id);
	}

	render() {
		const { revenue } = this.props.revenue;
		console.log(this.props.user);
		const revenueExpenses = revenue.filter(ele => {
			return ele.gen_id === 1;
		});
		const revenueDisplay = revenueExpenses.map(ele => {
			return (
				<div>
					<RevenueDisplay
						key={ele.id}
						total={ele.total}
						name={ele.name}
						spending={ele.spending}
					/>
				</div>
			);
		});
		const homeExpenses = revenue.filter(ele => {
			return ele.gen_id === 2;
		});
		const homeDisplay = homeExpenses.map(ele => {
			return (
				<HomeDisplay
					key={ele.id}
					total={ele.total}
					name={ele.name}
					spending={ele.spending}
				/>
			);
		});
		const dailyLivingExpenses = revenue.filter(ele => {
			return ele.gen_id === 3;
		});
		const dailyLivingDisplay = dailyLivingExpenses.map(ele => {
			return (
				<DailyLivingDisplay
					key={ele.id}
					total={ele.total}
					name={ele.name}
					spending={ele.spending}
				/>
			);
		});
		const transportationExpenses = revenue.filter(ele => {
			return ele.gen_id === 4;
		});
		const transportationDisplay = transportationExpenses.map(ele => {
			return (
				<TransportationDisplay
					key={ele.id}
					total={ele.total}
					name={ele.name}
					spending={ele.spending}
				/>
			);
		});
		const entertainmentExpenses = revenue.filter(ele => {
			return ele.gen_id === 5;
		});
		const entertainmentDisplay = entertainmentExpenses.map(ele => {
			return (
				<EntertainmentDisplay
					key={ele.id}
					total={ele.total}
					name={ele.name}
					spending={ele.spending}
				/>
			);
		});
		const healthExpenses = revenue.filter(ele => {
			return ele.gen_id === 6;
		});
		const healthDisplay = healthExpenses.map(ele => {
			return (
				<HealthDisplay
					key={ele.id}
					total={ele.total}
					name={ele.name}
					spending={ele.spending}
				/>
			);
		});
		const vacationExpenses = revenue.filter(ele => {
			return ele.gen_id === 7;
		});
		const vacationDisplay = vacationExpenses.map(ele => {
			return (
				<VacationDisplay
					key={ele.id}
					total={ele.total}
					name={ele.name}
					spending={ele.spending}
				/>
			);
		});
		const recreationExpenses = revenue.filter(ele => {
			return ele.gen_id === 8;
		});
		const recreationDisplay = recreationExpenses.map(ele => {
			return (
				<RecreationDisplay
					key={ele.id}
					total={ele.total}
					name={ele.name}
					spending={ele.spending}
				/>
			);
		});
		const subscriptionExpenses = revenue.filter(ele => {
			return ele.gen_id === 9;
		});
		const subscriptionDisplay = subscriptionExpenses.map(ele => {
			return (
				<SubscriptionDisplay
					key={ele.id}
					total={ele.total}
					name={ele.name}
					spending={ele.spending}
				/>
			);
		});
		const personalExpenses = revenue.filter(ele => {
			return ele.gen_id === 10;
		});
		const personalDisplay = personalExpenses.map(ele => {
			return (
				<PersonalDisplay
					key={ele.id}
					total={ele.total}
					name={ele.name}
					spending={ele.spending}
				/>
			);
		});
		const obligationsExpenses = revenue.filter(ele => {
			return ele.gen_id === 11;
		});
		const obligationsDisplay = obligationsExpenses.map(ele => {
			return (
				<ObligationsDisplay
					key={ele.id}
					total={ele.total}
					name={ele.name}
					spending={ele.spending}
				/>
			);
		});

		const { error, redirect, loading } = this.props.user;
		const { subscription } = this.props.user.user;
		if (error || redirect) {
			alert("You Are Not Authorized To Visit This Page, Please Login");
			this.props.history.push("/auth/login");
		} else if (!subscription) {
			alert("You Are Not Subscribed");
			this.props.history.push("/auth/subscribe");
		}
		if (loading) return <div>Loading</div>;

		return (
			<div>
				<BarChart />
				<Link to="/form/new-charge">
					<button
						onClick={() => {
							this.props.toggelEditFalse();
						}}
					>
						Buy Something?
					</button>
				</Link>
				<Link to="/form/new-charge">
					<button
						onClick={() => {
							this.props.toggelEditTrue();
						}}
					>
						Edit Your Budget
					</button>
				</Link>

				<div className="all-displays">
					<div className="display">{revenueDisplay}</div>
					<div className="display">{homeDisplay}</div>
					<div className="display">{dailyLivingDisplay}</div>
					<div className="display">{transportationDisplay}</div>
					<div className="display">{entertainmentDisplay}</div>
					<div className="display">{healthDisplay}</div>
					<div className="display">{vacationDisplay}</div>
					<div className="display">{recreationDisplay}</div>
					<div className="display">{subscriptionDisplay}</div>
					<div className="display">{personalDisplay}</div>
					<div className="display">{obligationsDisplay}</div>
				</div>
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

export default connect(mapStateToProps, {
	getUser,
	getExpenses,
	toggelEditFalse,
	toggelEditTrue
})(withRouter(Dashboard));
