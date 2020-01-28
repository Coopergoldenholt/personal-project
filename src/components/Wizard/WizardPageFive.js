import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class WizardPageFive extends Component {
	constructor() {
		super();
		this.state = {
			tv: 0,
			tvSubscriptions: 0,
			concerts: 0,
			monthId: 1
		};
	}

	handleChange(e, key) {
		this.setState({
			[key]: e.target.value
		});
	}

	handleClick = async () => {
		const { tv, tvSubscriptions, concerts, monthId } = this.state;
		const { user } = this.props;
		Axios.post(`/api/expenses/${user.id}`, {
			name: "T.V.",
			total: tv,
			genId: 5,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "T.V. Subscriptions",
			total: tvSubscriptions,
			genId: 5,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Concerts",
			total: concerts,
			genId: 5,
			monthId: monthId
		}).then(res => {});

		this.props.history.push("/form/six");
	};

	render() {
		return (
			<div className="wizard">
				<div className="wizard-container">
					<div>
						<p className="wizard-text">Cable TV:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "tv")}
						/>
					</div>
					<div>
						<p className="wizard-text">Subscriptions:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "tvSubscriptions")}
						/>
					</div>
					<div>
						<p className="wizard-text">CONCERTS/CLUBS/TICKETS:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "concerts")}
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

export default connect(mapStateToProps)(withRouter(WizardPageFive));
