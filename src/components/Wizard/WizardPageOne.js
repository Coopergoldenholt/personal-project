import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUser } from "../../ducks/reducers/userReducer";

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
			<div>
				<div>
					<p>WAGES: (This should be your NET cash take home)</p>
					<input type="number" onChange={e => this.handleChange(e, "wage")} />
				</div>
				<div>
					<p>Interest/Dividends:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "interest")}
					/>
				</div>
				<div>
					<p>Misc: (Any other cash flow that you have)</p>
					<input type="number" onChange={e => this.handleChange(e, "misc")} />
				</div>
				<button onClick={() => this.handleClick()}></button>
			</div>
		);
	}
}

const mapStateToProps = state => state.user;

export default connect(mapStateToProps, { getUser })(withRouter(WizardPageOne));
