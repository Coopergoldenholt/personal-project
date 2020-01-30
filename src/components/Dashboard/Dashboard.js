import React, { Component } from "react";
import {
	getUser,
	toggelEditFalse,
	toggelEditTrue
} from "../../ducks/reducers/userReducer";
import {
	getExpenses,
	getCharges,
	toggleChargesFalse,
	toggleChargesTrue
} from "../../ducks/reducers/expensesReducer";
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
import DonutChart from "../Graphs/DonutChart";
import "./Dashboard.scss";

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			userId: 0,
			genId: 0,
			monthId: 1,
			showCharges: false
		};
	}
	async componentDidMount() {
		const { id } = this.props.user.user;
		this.props.getUser();
		await this.props.getExpenses(id);
		if (!this.props.revenue.revenue[1]) {
			alert("Please Fill Out Your Budget");
			this.props.history.push("/form/one");
		}
		this.props.getCharges(id, this.state.monthId);
	}
	componentWillUnmount() {
		this.props.toggleChargesFalse();
	}

	handlePurchasesClick() {
		this.props.toggleChargesTrue();
		this.setState({
			showCharges: true
		});
	}

	handleBudgetComparisonClick() {
		this.props.toggleChargesFalse();
		this.setState({
			showCharges: false
		});
	}

	render() {
		const { revenue, charges } = this.props.revenue;
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
		const revenueCharges = charges.filter(ele => {
			return ele.gen_id === 1;
		});
		const revenueChargesDisplay = revenueCharges.map(ele => {
			return (
				<div>
					<RevenueDisplay
						key={ele.id}
						amount={ele.amount}
						name={ele.name}
						id={ele.expense_id}
					/>
				</div>
			);
		});
		const homeCharges = charges.filter(ele => {
			return ele.gen_id === 2;
		});
		const homeChargesDisplay = homeCharges.map(ele => {
			return (
				<HomeDisplay
					key={ele.id}
					amount={ele.amount}
					name={ele.name}
					id={ele.expense_id}
				/>
			);
		});
		const dailyLivingCharges = charges.filter(ele => {
			return ele.gen_id === 3;
		});
		const dailyLivingChargesDisplay = dailyLivingCharges.map(ele => {
			return (
				<DailyLivingDisplay
					key={ele.id}
					amount={ele.amount}
					name={ele.name}
					id={ele.expense_id}
				/>
			);
		});
		const transportationCharges = charges.filter(ele => {
			return ele.gen_id === 4;
		});
		const transportationChargesDisplay = transportationCharges.map(ele => {
			return (
				<TransportationDisplay
					key={ele.id}
					amount={ele.amount}
					name={ele.name}
					id={ele.expense_id}
				/>
			);
		});
		const entertainmentCharges = charges.filter(ele => {
			return ele.gen_id === 5;
		});
		const entertainmentChargesDisplay = entertainmentCharges.map(ele => {
			return (
				<EntertainmentDisplay
					key={ele.id}
					amount={ele.amount}
					name={ele.name}
					id={ele.expense_id}
				/>
			);
		});
		const healthCharges = charges.filter(ele => {
			return ele.gen_id === 6;
		});
		const healthChargesDisplay = healthCharges.map(ele => {
			return (
				<HealthDisplay
					key={ele.id}
					amount={ele.amount}
					name={ele.name}
					id={ele.expense_id}
				/>
			);
		});
		const vacationCharges = charges.filter(ele => {
			return ele.gen_id === 7;
		});
		const vacationChargesDisplay = vacationCharges.map(ele => {
			return (
				<VacationDisplay
					key={ele.id}
					amount={ele.amount}
					name={ele.name}
					id={ele.expense_id}
				/>
			);
		});
		const recreationCharges = charges.filter(ele => {
			return ele.gen_id === 8;
		});
		const recreationChargesDisplay = recreationCharges.map(ele => {
			return (
				<RecreationDisplay
					key={ele.id}
					amount={ele.amount}
					name={ele.name}
					id={ele.expense_id}
				/>
			);
		});
		const subscriptionCharges = charges.filter(ele => {
			return ele.gen_id === 9;
		});
		const subscriptionChargesDisplay = subscriptionCharges.map(ele => {
			return (
				<SubscriptionDisplay
					key={ele.id}
					amount={ele.amount}
					name={ele.name}
					id={ele.expense_id}
				/>
			);
		});
		const personalCharges = charges.filter(ele => {
			return ele.gen_id === 10;
		});
		const personalChargesDisplay = personalCharges.map(ele => {
			return (
				<PersonalDisplay
					key={ele.id}
					amount={ele.amount}
					name={ele.name}
					id={ele.expense_id}
				/>
			);
		});
		const obligationsCharges = charges.filter(ele => {
			return ele.gen_id === 11;
		});
		const obligationsChargesDisplay = obligationsCharges.map(ele => {
			console.log(ele);
			return (
				<ObligationsDisplay
					key={ele.id}
					amount={ele.amount}
					name={ele.name}
					id={ele.expense_id}
				/>
			);
		});

		const { error, redirect, loading } = this.props.user;
		const { subscription } = this.props.user.user;
		if (error || redirect) {
			alert("You Are Not Authorized To Visit This Page, Please Login");
			this.props.history.push("/auth/login");
		}
		if (!subscription) {
			alert("You Are Not Subscribed");
			this.props.history.push("/auth/subscribe");
		}

		if (loading) return <div>Loading</div>;

		return (
			<div className="dashboard-body">
				<div className="display-dashboard-buttons">
					<Link to="/form/new-charge">
						<button
							className="dashboard-button buy-something-button"
							onClick={() => {
								this.props.toggelEditFalse();
							}}
						>
							Buy Something?
						</button>
					</Link>
					<Link to="/form/new-charge">
						<button
							className="dashboard-button edit-budget-button"
							onClick={() => {
								this.props.toggelEditTrue();
							}}
						>
							Edit Your Budget
						</button>
					</Link>
				</div>
				<div className="barChart">
					<BarChart />
					<DonutChart />
				</div>
				{!this.state.showCharges ? (
					<div className="dashboard-show-purchases-button-container">
						<button
							className="dashboard-show-purchases-button"
							onClick={() => this.handlePurchasesClick()}
						>
							Show Purchases
						</button>
					</div>
				) : (
					<div className="dashboard-show-purchases-button-container">
						<button
							className="dashboard-show-purchases-button"
							onClick={() => this.handleBudgetComparisonClick()}
						>
							Show Budget/Spent Comparison
						</button>
					</div>
				)}
				{!this.state.showCharges ? (
					<div className="all-displays">
						<div className="display">
							<h2 className="expense-name">REVENUE</h2>
							{revenueDisplay}
						</div>
						<div className="display">
							<h2 className="expense-name">HOME EXPENSES</h2>
							{homeDisplay}
						</div>
						<div className="display">
							{" "}
							<h2 className="expense-name">DAILING LIVING EXPENSES</h2>
							{dailyLivingDisplay}
						</div>
						<div className="display">
							<h2 className="expense-name">TRANSPORTATION EXPENSES</h2>
							{transportationDisplay}
						</div>
						<div className="display">
							{" "}
							<h2 className="expense-name">ENTERTAINMENT EXPENSES</h2>
							{entertainmentDisplay}
						</div>
						<div className="display">
							<h2 className="expense-name">HEALTH EXPENSES</h2>
							{healthDisplay}
						</div>
						<div className="display">
							<h2 className="expense-name">VACATION EXPENSES</h2>
							{vacationDisplay}
						</div>
						<div className="display">
							<h2 className="expense-name">RECREATION EXPENSES</h2>
							{recreationDisplay}
						</div>
						<div className="display">
							<h2 className="expense-name">SUBSCRIPTION EXPENSES</h2>
							{subscriptionDisplay}
						</div>
						<div className="display">
							<h2 className="expense-name">PERSONAL EXPENSES</h2>
							{personalDisplay}
						</div>
						<div className="display">
							<h2 className="expense-name">FINANCIAL OBLIGATIONS EXPENSES</h2>
							{obligationsDisplay}
						</div>
					</div>
				) : (
					<div className="all-displays">
						<div className="display">
							<h2 className="expense-name">REVENUE</h2>
							{revenueChargesDisplay[0] ? (
								revenueChargesDisplay
							) : (
								<p>No Charges In This Category</p>
							)}
						</div>
						<div className="display">
							<h2 className="expense-name">HOME EXPENSES</h2>
							{homeChargesDisplay[0] ? (
								homeChargesDisplay
							) : (
								<p>No Charges In This Category</p>
							)}
						</div>
						<div className="display">
							<h2 className="expense-name">DAILY LIVING EXPENSES</h2>
							{dailyLivingChargesDisplay[0] ? (
								dailyLivingChargesDisplay
							) : (
								<p>No Charges In This Category</p>
							)}
						</div>
						<div className="display">
							<h2 className="expense-name">TRANSPORTATION EXPENSES</h2>
							{transportationChargesDisplay[0] ? (
								transportationChargesDisplay
							) : (
								<p>No Charges In This Category</p>
							)}
						</div>
						<div className="display">
							<h2 className="expense-name">ENTERTAINMENT EXPENSES</h2>
							{entertainmentChargesDisplay[0] ? (
								entertainmentChargesDisplay
							) : (
								<p>No Charges In This Category</p>
							)}
						</div>
						<div className="display">
							<h2 className="expense-name">HEALTH EXPENSES</h2>
							{healthChargesDisplay[0] ? (
								healthChargesDisplay
							) : (
								<p>No Charges In This Category</p>
							)}
						</div>
						<div className="display">
							<h2 className="expense-name">VACATION EXPENSES</h2>
							{vacationChargesDisplay[0] ? (
								vacationChargesDisplay
							) : (
								<p>No Charges In This Category</p>
							)}
						</div>
						<div className="display">
							<h2 className="expense-name">RECREATION EXPENSES</h2>
							{recreationChargesDisplay[0] ? (
								recreationChargesDisplay
							) : (
								<p>No Charges In This Category</p>
							)}
						</div>
						<div className="display">
							<h2 className="expense-name">SUBSCRIPTION EXPENSES</h2>
							{subscriptionChargesDisplay[0] ? (
								subscriptionChargesDisplay
							) : (
								<p>No Charges In This Category</p>
							)}
						</div>
						<div className="display">
							<h2 className="expense-name">PERSONAL EXPENSES</h2>
							{personalChargesDisplay[0] ? (
								personalChargesDisplay
							) : (
								<p>No Charges In This Category</p>
							)}
						</div>
						<div className="display">
							<h2 className="expense-name">FINANCIAL OBLIGATIONS EXPENSES</h2>
							{obligationsChargesDisplay[0] ? (
								obligationsChargesDisplay
							) : (
								<p>No Charges In This Category</p>
							)}
						</div>
					</div>
				)}
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
	toggelEditTrue,
	getCharges,
	toggleChargesTrue,
	toggleChargesFalse
})(withRouter(Dashboard));
