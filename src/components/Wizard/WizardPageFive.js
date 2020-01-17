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
			<div>
				<div>
					PAGE FIVE
					<p>Cable TV:</p>
					<input type="number" onChange={e => this.handleChange(e, "tv")} />
				</div>
				<div>
					<p>Subscriptions:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "tvSubscriptions")}
					/>
				</div>
				<div>
					<p>CONCERTS/CLUBS/TICKETS:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "concerts")}
					/>
				</div>
				<button onClick={() => this.handleClick()}></button>
			</div>
		);
	}
}

const mapStateToProps = state => state.user;

export default connect(mapStateToProps)(withRouter(WizardPageFive));
