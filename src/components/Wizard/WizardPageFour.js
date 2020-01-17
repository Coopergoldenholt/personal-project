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
			<div>
				<div>
					PAGE FOUR
					<p>GAS/FUEL:</p>
					<input type="number" onChange={e => this.handleChange(e, "gas")} />
				</div>
				<div>
					<p>CAR INSURANCE:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "carInsurance")}
					/>
				</div>
				<div>
					<p>REPAIRS:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "repairs")}
					/>
				</div>
				<div>
					<p>CAR WASH/DETAILING SERVICE:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "carWash")}
					/>
				</div>
				<div>
					<p>PARKING/Public Transportation:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "parking")}
					/>
				</div>
				<div>
					<p>Car Payment:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "carPayment")}
					/>
				</div>
				<button onClick={() => this.handleClick()}></button>
			</div>
		);
	}
}

const mapStateToProps = state => state.user;

export default connect(mapStateToProps)(withRouter(WizardPageFour));
