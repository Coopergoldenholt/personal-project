import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class WizardPageFour extends Component {
	constructor() {
		super();
		this.state = {
			gas: 0,
			carInsurance: 0,
			carRepairs: 0,
			carWash: 0,
			parking: 0,
			carPayment: 0,
			monthId: 1,
			genId: 4
		};
	}

	handleChange(e, key) {
		this.setState({
			[key]: e.target.value
		});
	}

	handleClick = async () => {
		const {
			gas,
			carInsurance,
			carRepairs,
			carWash,
			parking,
			carPayment,
			monthId,
			genId
		} = this.state;
		const { user } = this.props;
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Gas/Fuel",
			total: gas,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Car Insurance",
			total: carInsurance,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "carRepairs",
			total: carRepairs,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Car Wash/Detail Service",
			total: carWash,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Parking/Public Transportation",
			total: parking,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Car Payment",
			total: carPayment,
			genId: genId,
			monthId: monthId
		}).then(res => {});

		this.props.history.push("/form/five");
	};

	render() {
		return (
			<div className="wizard">
				<div className="wizard-container wizard-three">
					<div>
						<p className="wizard-text">GAS/FUEL:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "gas")}
						/>
					</div>
					<div>
						<p className="wizard-text">CAR INSURANCE:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "carInsurance")}
						/>
					</div>
					<div>
						<p className="wizard-text">REPAIRS:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "repairs")}
						/>
					</div>
					<div>
						<p className="wizard-text">CAR WASH/DETAILING SERVICE:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "carWash")}
						/>
					</div>
					<div>
						<p className="wizard-text">PARKING/Public Transportation:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "parking")}
						/>
					</div>
					<div>
						<p className="wizard-text">Car Payment:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "carPayment")}
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

export default connect(mapStateToProps)(withRouter(WizardPageFour));
