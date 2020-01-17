import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class WizardPageEight extends Component {
	constructor() {
		super();
		this.state = {
			eventTickets: 0,
			sportsEquipment: 0,
			teamDues: 0,
			toys: 0,
			petBoarding: 0,
			rentalCar: 0,
			monthId: 1,
			genId: 8
		};
	}

	handleChange(e, key) {
		this.setState({
			[key]: e.target.value
		});
	}

	handleClick = async () => {
		const {
			eventTickets,
			sportsEquipment,
			teamDues,
			toys,
			monthId,
			genId
		} = this.state;
		const { user } = this.props;
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Event Tickets",
			total: eventTickets,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Sports Equipment",
			total: sportsEquipment,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Team Dues",
			total: teamDues,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Toys",
			total: toys,
			genId: genId,
			monthId: monthId
		}).then(res => {});

		this.props.history.push("/form/nine");
	};

	render() {
		return (
			<div>
				<div>
					PAGE eight
					<p>Plane Fare:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "eventTickets")}
					/>
				</div>
				<div>
					<p>sports Equipment:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "sportsEquipment")}
					/>
				</div>
				<div>
					<p>team Dues:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "teamDues")}
					/>
				</div>
				<div>
					<p>toys/child gear:</p>
					<input type="number" onChange={e => this.handleChange(e, "toys")} />
				</div>

				<button onClick={() => this.handleClick()}></button>
			</div>
		);
	}
}

const mapStateToProps = state => state.user;

export default connect(mapStateToProps)(withRouter(WizardPageEight));
