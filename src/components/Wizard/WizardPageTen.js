import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class WizardPageTen extends Component {
	constructor() {
		super();
		this.state = {
			clothing: 0,
			gifts: 0,
			salon: 0,
			books: 0,
			monthId: 1,
			genId: 10
		};
	}

	handleChange(e, key) {
		this.setState({
			[key]: e.target.value
		});
	}

	handleClick = async () => {
		const { clothing, gifts, salon, books, monthId, genId } = this.state;
		const { user } = this.props;
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Clothing",
			total: clothing,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Gifts",
			total: gifts,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Salon",
			total: salon,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Books",
			total: books,
			genId: genId,
			monthId: monthId
		}).then(res => {});

		this.props.history.push("/form/eleven");
	};

	render() {
		return (
			<div className="wizard">
				<div className="wizard-container wizard-three">
					<div>
						<p className="wizard-text">clothing:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "clothing")}
						/>
					</div>
					<div>
						<p className="wizard-text">gifts:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "gifts")}
						/>
					</div>
					<div>
						<p className="wizard-text">salon/barber:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "salon")}
						/>
					</div>
					<div>
						<p className="wizard-text">books:</p>
						<input
							placeholder="Insert Number Here"
							className="wizard-input"
							type="number"
							onChange={e => this.handleChange(e, "books")}
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

export default connect(mapStateToProps)(withRouter(WizardPageTen));
