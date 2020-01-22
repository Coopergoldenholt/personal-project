import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class WizardPageTwo extends Component {
	constructor() {
		super();
		this.state = {
			mortgage: 0,
			rent: 0,
			hoa: 0,
			propertyTaxes: 0,
			homeInsurance: 0,
			repairs: 0,
			services: 0,
			utilities: 0,
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
			mortgage,
			rent,
			hoa,
			propertyTaxes,
			homeInsurance,
			repairs,
			services,
			utilities,
			monthId
		} = this.state;
		const { user } = this.props;
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Mortgage",
			total: mortgage,
			genId: 2,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Rent",
			total: rent,
			genId: 2,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "HOA",
			total: hoa,
			genId: 2,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Property Taxes",
			total: propertyTaxes,
			genId: 2,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Home Insurance",
			total: homeInsurance,
			genId: 2,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Repairs",
			total: repairs,
			genId: 2,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Services",
			total: services,
			genId: 2,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Utilities",
			total: utilities,
			genId: 2,
			monthId: monthId
		}).then(res => {});
		this.props.history.push("/form/three");
	};

	render() {
		return (
			<div>
				<div>
					<p>MORTGAGE:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "mortgage")}
					/>
				</div>
				<div>
					<p>RENT:</p>
					<input type="number" onChange={e => this.handleChange(e, "rent")} />
				</div>
				<div>
					<p>HOA/FEES/DUES:</p>
					<input type="number" onChange={e => this.handleChange(e, "hoa")} />
				</div>
				<div>
					<p>Property Taxes:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "propertyTaxes")}
					/>
				</div>
				<div>
					<p>Home Insurance:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "homeInsurance")}
					/>
				</div>
				<div>
					<p>Repairs:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "repairs")}
					/>
				</div>
				<div>
					<p>Services:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "services")}
					/>
				</div>
				<div>
					<p>Utilities:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "utilities")}
					/>
				</div>
				<button onClick={() => this.handleClick()}></button>
			</div>
		);
	}
}

const mapStateToProps = state => state.user;

export default connect(mapStateToProps)(withRouter(WizardPageTwo));
