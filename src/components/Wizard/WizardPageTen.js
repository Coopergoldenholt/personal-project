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
			<div>
				<div>
					PAGE TEN
					<p>clothing:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "clothing")}
					/>
				</div>
				<div>
					<p>gifts:</p>
					<input type="number" onChange={e => this.handleChange(e, "gifts")} />
				</div>
				<div>
					<p>salon/barber:</p>
					<input type="number" onChange={e => this.handleChange(e, "salon")} />
				</div>
				<div>
					<p>books:</p>
					<input type="number" onChange={e => this.handleChange(e, "books")} />
				</div>
				<div>
					<p>Religous Organization:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "religousOrganization")}
					/>
				</div>
				<div>
					<p>Charity:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "charity")}
					/>
				</div>
				<button onClick={() => this.handleClick()}></button>
			</div>
		);
	}
}

const mapStateToProps = state => state.user;

export default connect(mapStateToProps)(withRouter(WizardPageTen));
