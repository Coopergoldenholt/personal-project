import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class WizardPageNine extends Component {
	constructor() {
		super();
		this.state = {
			magazines: 0,
			newspapers: 0,
			internet: 0,
			music: 0,
			religousOrganization: 0,
			charity: 0,
			monthId: 1,
			genId: 9
		};
	}

	handleChange(e, key) {
		this.setState({
			[key]: e.target.value
		});
	}

	handleClick = async () => {
		const {
			magazines,
			newspapers,
			internet,
			music,
			religousOrganization,
			charity,
			monthId,
			genId
		} = this.state;
		const { user } = this.props;
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Magazines",
			total: magazines,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Newspapers",
			total: newspapers,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Internet",
			total: internet,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Music",
			total: music,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Religous Organization",
			total: religousOrganization,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Charity",
			total: charity,
			genId: genId,
			monthId: monthId
		}).then(res => {});

		this.props.history.push("/form/ten");
	};

	render() {
		return (
			<div className="wizard">
				<div className="wizard-container wizard-three">
					<div>
						<p className="wizard-text">Magazines:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "magazines")}
						/>
					</div>
					<div>
						<p className="wizard-text">newspapers:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "newspapers")}
						/>
					</div>
					<div>
						<p className="wizard-text">internet:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "internet")}
						/>
					</div>
					<div>
						<p className="wizard-text">music:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "music")}
						/>
					</div>
					<div>
						<p className="wizard-text">Religous Organization:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "religousOrganization")}
						/>
					</div>
					<div>
						<p className="wizard-text">Charity:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "charity")}
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

export default connect(mapStateToProps)(withRouter(WizardPageNine));
