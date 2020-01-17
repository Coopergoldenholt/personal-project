import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class WizardPageThree extends Component {
	constructor() {
		super();
		this.state = {
			groceries: 0,
			childCare: 0,
			dryCleaning: 0,
			houseCleaningService: 0,
			houseHoldItems: 0,
			monthId: 1
		};
	}

	handleChange(e, key) {
		this.setState({
			[key]: e.target.value
		});
	}

	handleClick = async () => {
		const {
			groceries,
			childCare,
			dryCleaning,
			diningOut,
			houseCleaningService,
			houseHoldItems,
			monthId
		} = this.state;
		const { user } = this.props;
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Groceries",
			total: groceries,
			genId: 3,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Child Care",
			total: childCare,
			genId: 3,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Dry Cleaning",
			total: dryCleaning,
			genId: 3,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Dining Out",
			total: diningOut,
			genId: 3,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "House Cleaning Service",
			total: houseCleaningService,
			genId: 3,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Household Items",
			total: houseHoldItems,
			genId: 3,
			monthId: monthId
		}).then(res => {});

		this.props.history.push("/form/four");
	};

	render() {
		return (
			<div>
				<div>
					PAGE THREE
					<p>GROCERIES:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "groceries")}
					/>
				</div>
				<div>
					<p>CHILD CARE:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "childCare")}
					/>
				</div>
				<div>
					<p>DRY CLEANING:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "dryCleaning")}
					/>
				</div>
				<div>
					<p>DINING OUT:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "diningOut")}
					/>
				</div>
				<div>
					<p>HOUSE CLEANING SERVICES:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "houseCleaningServices")}
					/>
				</div>
				<div>
					<p>HOUSEHOLD ITEMS:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "householeItems")}
					/>
				</div>
				<button onClick={() => this.handleClick()}></button>
			</div>
		);
	}
}

const mapStateToProps = state => state.user;

export default connect(mapStateToProps)(withRouter(WizardPageThree));
