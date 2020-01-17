import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class WizardPageSix extends Component {
	constructor() {
		super();
		this.state = {
			healthClub: 0,
			healthInsurance: 0,
			prescriptions: 0,
			overCounterDrugs: 0,
			coPay: 0,
			veterinarians: 0,
			lifeInsurance: 1,
			monthId: 1,
			genId: 6
		};
	}

	handleChange(e, key) {
		this.setState({
			[key]: e.target.value
		});
	}

	handleClick = async () => {
		const {
			healthClub,
			healthInsurance,
			prescriptions,
			overCounterDrugs,
			coPay,
			veterinarians,
			lifeInsurance,
			monthId,
			genId
		} = this.state;
		const { user } = this.props;
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Health Club",
			total: healthClub,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Health Insurance",
			total: healthInsurance,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Prescriptions",
			total: prescriptions,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Over-the-counter-drugs",
			total: overCounterDrugs,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Co-Pay",
			total: coPay,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Veterinarians",
			total: veterinarians,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Life Insurance",
			total: lifeInsurance,
			genId: genId,
			monthId: monthId
		}).then(res => {});

		this.props.history.push("/form/seven");
	};

	render() {
		return (
			<div>
				<div>
					PAGE SIX
					<p>Health Club Dues:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "healthClub")}
					/>
				</div>
				<div>
					<p>Health Insurance:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "healthInsurance")}
					/>
				</div>
				<div>
					<p>Prescriptions:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "prescriptions")}
					/>
				</div>
				<div>
					<p>Over-the-counter-drugs:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "overCounterDrugs")}
					/>
				</div>
				<div>
					<p>Co-Payment/Out-of_pocket:</p>
					<input type="number" onChange={e => this.handleChange(e, "coPay")} />
				</div>
				<div>
					<p>veterinarians/pet-medicines:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "veterinarians")}
					/>
				</div>
				<div>
					<p>Life Insurance:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "lifeInsurance")}
					/>
				</div>
				<button onClick={() => this.handleClick()}></button>
			</div>
		);
	}
}

const mapStateToProps = state => state.user;

export default connect(mapStateToProps)(withRouter(WizardPageSix));
