import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUser } from "../../ducks/reducers/userReducer";
import "./NewCharge.scss";

class NewCharge extends Component {
	constructor() {
		super();
		this.state = {
			genId: 1,
			name: "",
			monthId: 1,
			spending: 0
		};
	}
	componentDidMount() {
		this.props.getUser();
	}

	handleCategoryChoice(category) {
		this.setState({
			genId: category
		});
	}

	handleNameChoice(name) {
		this.setState({
			name: name
		});
	}

	handleSpendingInput(e) {
		this.setState({
			spending: e.target.value
		});
	}
	handleSpendingSubmit() {
		const { genId, name, monthId, spending } = this.state;
		const { id } = this.props.user.user;
		const userId = id;
		axios
			.put(`/api/spending/${userId}`, {
				genId: genId,
				name: name,
				monthId: monthId,
				spending: spending
			})
			.then(res => {
				this.props.history.push("/dashboard");
			});
	}
	handleExpenseSubmit() {
		const { genId, name, monthId, spending } = this.state;
		const { id } = this.props.user.user;
		const userId = id;
		axios
			.put(`/api/expenses/${userId}`, {
				genId: genId,
				name: name,
				monthId: monthId,
				total: spending
			})
			.then(res => {
				this.props.history.push("/dashboard");
			});
	}

	render() {
		// const { error, redirect, loading } = this.props.user;
		// if (error || redirect) return <Redirect to="/auth/login" />;
		// if (loading) return <div>Loading</div>;
		const { genId } = this.state;

		const otherInput = () => {
			if (+genId === 1) {
				return (
					<select
						className="new-charge-drop-down"
						onChange={e => this.handleNameChoice(e.target.value)}
					>
						<option selected>--Please Select A Sub-Category--</option>
						<option value="Wage (NET)">Wages</option>
						<option value="Interest">Interest/Divedinds</option>
						<option value="Misc.">Misc.</option>
					</select>
				);
			} else if (+genId === 2) {
				return (
					<select
						className="new-charge-drop-down"
						onChange={e => this.handleNameChoice(e.target.value)}
					>
						<option selected>--Please Select A Sub-Category--</option>
						<option value="Mortgage">Mortgage</option>
						<option value="Rent">Rent</option>
						<option value="HOA">HOA/FEES/DUES</option>
						<option value="Property Taxes">Property Taxes</option>
						<option value="Utilities">Utilities</option>
						<option value="Services">Services</option>
						<option value="Home Insurance">Home Insurance</option>
						<option value="Repairs">Repairs</option>
					</select>
				);
			} else if (+genId === 3) {
				return (
					<select
						className="new-charge-drop-down"
						onChange={e => this.handleNameChoice(e.target.value)}
					>
						<option selected>--Please Select A Sub-Category--</option>
						<option value="Groceries">Groceries</option>
						<option value="Child Care">Child Care</option>
						<option value="Dry Cleaning">Dry Cleaning</option>
						<option value="Dining Out">Dining Out</option>
						<option value="House Cleaning Service">
							Housecleaning Service
						</option>
						<option value="Household Items"> Household Items</option>
					</select>
				);
			} else if (+genId === 4) {
				return (
					<select
						className="new-charge-drop-down"
						onChange={e => this.handleNameChoice(e.target.value)}
					>
						<option selected>--Please Select A Sub-Category--</option>
						<option value="Gas/Fuel">Gas/Fuel</option>
						<option value="Car Insurance">Car Insurance</option>
						<option value="carRepairs">Repairs</option>
						<option value="Car Wash/Detail Service">
							Car Wash/Detailing Service
						</option>
						<option value="Parking/Public Transportation">
							Parking/Public Transportation
						</option>
						/option>
						<option value="Car Payment">Car Payment</option>
					</select>
				);
			} else if (+genId === 5) {
				return (
					<select
						className="new-charge-drop-down"
						onChange={e => this.handleNameChoice(e.target.value)}
					>
						<option selected>--Please Select A Sub-Category--</option>
						<option value="T.V.">T.V.</option>
						<option value="T.V. Subscriptions">Subscriptions</option>
						<option value="Concerts">Concerts/Clubs/Tickets</option>
					</select>
				);
			} else if (+genId === 6) {
				return (
					<select
						className="new-charge-drop-down"
						onChange={e => this.handleNameChoice(e.target.value)}
					>
						<option selected>--Please Select A Sub-Category--</option>
						<option value="Health Club">Health Club</option>
						<option value="Health Insurance">Health Insurance</option>
						<option value="Presctiptions">Prescriptions</option>
						<option value="Over-the-counter-drugs">
							Over-the-counter-drugs
						</option>
						<option value="Co-Pay">Co-pay</option>
						<option value="Veterinarians">Vet/Pet-medicines</option>
						<option value="Life Insurance">Life Insurance</option>
					</select>
				);
			} else if (+genId === 7) {
				return (
					<select
						className="new-charge-drop-down"
						onChange={e => this.handleNameChoice(e.target.value)}
					>
						<option selected>--Please Select A Sub-Category--</option>
						<option value="Plane Fare">Plane Fare</option>
						<option value="Accomidations">Accomidations</option>
						<option value="Food">Food</option>
						<option value="Souveniers">Souveniers</option>
						<option value="Pet Boarding">Pet Boarding</option>
						<option value="Rental Car">Rental Car</option>
					</select>
				);
			} else if (+genId === 8) {
				return (
					<select
						className="new-charge-drop-down"
						onChange={e => this.handleNameChoice(e.target.value)}
					>
						<option selected>--Please Select A Sub-Category--</option>
						<option value="Event Tickets">Event Tickets</option>
						<option value="Sports Equipment">Sports Equipment</option>
						<option value="Team Dues">Team Dues</option>
						<option value="Toys">Toys/Child Gear</option>
					</select>
				);
			} else if (+genId === 9) {
				return (
					<select
						className="new-charge-drop-down"
						onChange={e => this.handleNameChoice(e.target.value)}
					>
						<option selected>--Please Select A Sub-Category--</option>
						<option value="Magazines">Magazines</option>
						<option value="Newspapers">Newspapers</option>
						<option value="Internet">Internet Connection</option>
						<option value="Music">Music</option>
						<option value="Religous Orginization">
							Religious Orginization
						</option>
						<option value="Charity">Charity</option>
					</select>
				);
			} else if (+genId === 10) {
				return (
					<select
						className="new-charge-drop-down"
						onChange={e => this.handleNameChoice(e.target.value)}
					>
						<option selected>--Please Select A Sub-Category--</option>
						<option value="Clothing">Clothing</option>
						<option value="Gifts">Gifts</option>
						<option value="Salon">Salon/Barber</option>
						<option value="Books">Books</option>
					</select>
				);
			} else if (+genId === 11) {
				return (
					<select
						className="new-charge-drop-down"
						onChange={e => this.handleNameChoice(e.target.value)}
					>
						<option selected>--Please Select A Sub-Category--</option>
						<option value="Savings">Long-term Savings</option>
						<option value="Retirement">
							Retirement(Investments, 401k, RothIRA, etc.
						</option>
						<option value="Credit Cards">Credit Card Payment</option>
						<option value="Income Tax">Income Tax</option>
						<option value="Retirement">Other Obligations</option>
					</select>
				);
			}
		};
		return (
			<div className="new-charge">
				<div className="new-charge-container">
					{this.props.user.editing ? (
						<h2 className="new-charge-header">
							What Changed About Your Budget?
						</h2>
					) : (
						<h2 className="new-charge-header">What Did You Buy/Make?</h2>
					)}
					<div>
						<p className="new-charge-text">Pick a Category:</p>
						<select
							className="new-charge-drop-down"
							onChange={e => this.handleCategoryChoice(e.target.value)}
						>
							<option value="1">Revenue</option>
							<option value="2">Home</option>
							<option value="3">Daily Living</option>
							<option value="4">Transportaion</option>
							<option value="5">Entertainment</option>
							<option value="6">Health</option>
							<option value="7">Vacation</option>
							<option value="8">Recreation</option>
							<option value="9">Subscription</option>
							<option value="10">Personal</option>
							<option value="11">Financial Obligation</option>
						</select>
					</div>
					<div>
						<p className="new-charge-text">Pick a Sub-Category:</p>
						{otherInput()}
					</div>
					<div>
						<p className="new-charge-text">Enter In The Amount:</p>
						<input
							className="new-charge-input"
							type="number"
							onChange={e => this.handleSpendingInput(e)}
						/>{" "}
					</div>
					{this.props.user.editing ? (
						<button
							className="new-charge-button"
							onClick={() => this.handleExpenseSubmit()}
						>
							Submit
						</button>
					) : (
						<button
							className="new-charge-button"
							onClick={() => this.handleSpendingSubmit()}
						>
							Submit
						</button>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { user } = state;
	return {
		user
	};
};

export default connect(mapStateToProps, { getUser })(withRouter(NewCharge));
