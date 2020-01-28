import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class WizardPageNine extends Component {
	constructor() {
		super();
		this.state = {
			savings: 0,
			retirement: 0,
			creditCards: 0,
			incomeTax: 0,
			otherObligations: 0,
			charity: 0,
			monthId: 1,
			genId: 11
		};
	}

	handleChange(e, key) {
		this.setState({
			[key]: e.target.value
		});
	}

	handleClick = async () => {
		const {
			savings,
			retirement,
			creditCards,
			incomeTax,
			otherObligations,
			monthId,
			genId
		} = this.state;
		const { user } = this.props;
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Savings",
			total: savings,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Retirement",
			total: retirement,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Credit Cards",
			total: creditCards,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Income Tax",
			total: incomeTax,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Other Obligations",
			total: otherObligations,
			genId: genId,
			monthId: monthId
		}).then(res => {});

		this.props.history.push("/dashboard");
	};

	render() {
		return (
			<div className="wizard">
				<div className="wizard-container wizard-five">
					<div>
						<p className="wizard-text">savings:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "savings")}
						/>
					</div>
					<div>
						<p className="wizard-text">retirement:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "retirement")}
						/>
					</div>
					<div>
						<p className="wizard-text">creditCards:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "creditCards")}
						/>
					</div>
					<div>
						<p className="wizard-text">incomeTax(Other):</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "incomeTax")}
						/>
					</div>
					<div>
						<p className="wizard-text">Other Obligations:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "otherObligations")}
						/>
					</div>
					<div>
						<button
							className="wizard-button"
							onClick={() => this.handleClick()}
						>
							Finished!
						</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => state.user;

export default connect(mapStateToProps)(withRouter(WizardPageNine));
