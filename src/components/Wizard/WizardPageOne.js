import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUser } from "../../ducks/reducers/userReducer";
import "./Wizard.scss";

class WizardPageOne extends Component {
	constructor() {
		super();
		this.state = {
			wage: 0,
			interest: 0,
			misc: 0,
			monthId: 1
		};
	}
	componentDidMount() {
		this.props.getUser();
	}

	handleChange(e, key) {
		this.setState({
			[key]: e.target.value
		});
	}

	handleClick = async () => {
		const { wage, interest, misc, monthId } = this.state;
		const { user } = this.props;
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Wage (NET)",
			total: wage,
			genId: 1,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Interest",
			total: interest,
			genId: 1,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Misc.",
			total: misc,
			genId: 1,
			monthId: monthId
		}).then(res => {});
		this.props.history.push("/form/two");
	};

	render() {
		return (
			<div className="wizard">
				<div className="wizard-container">
					<div>
						<p className="wizard-text">
							WAGES: (This should be your NET cash take home)
						</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "wage")}
						/>
					</div>
					<div>
						<p className="wizard-text">Interest/Dividends:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "interest")}
						/>
					</div>
					<div>
						<p className="wizard-text">
							Misc: (Any other cash flow that you have)
						</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "misc")}
						/>
					</div>
					<div className="wizard-button-container">
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

export default connect(mapStateToProps, { getUser })(withRouter(WizardPageOne));
