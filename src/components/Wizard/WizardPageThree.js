import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./Wizard.scss";

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
			<div className="wizard">
				<div className="wizard-container wizard-three">
					<div>
						<p className="wizard-text">GROCERIES:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "groceries")}
						/>
					</div>
					<div>
						<p className="wizard-text">CHILD CARE:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "childCare")}
						/>
					</div>
					<div>
						<p className="wizard-text">DRY CLEANING:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "dryCleaning")}
						/>
					</div>
					<div>
						<p className="wizard-text">DINING OUT:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "diningOut")}
						/>
					</div>
					<div>
						<p className="wizard-text">HOUSE CLEANING SERVICES:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "houseCleaningServices")}
						/>
					</div>
					<div>
						<p className="wizard-text">HOUSEHOLD ITEMS:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "householeItems")}
						/>
					</div>
					<div>
						<button
							className="wizard-button"
							onClick={() => this.handleClick()}
						>
							Next Category
						</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => state.user;

export default connect(mapStateToProps)(withRouter(WizardPageThree));
