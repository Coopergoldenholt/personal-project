import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class WizardPageSeven extends Component {
	constructor() {
		super();
		this.state = {
			planeFare: 0,
			accomidations: 0,
			food: 0,
			souveniers: 0,
			petBoarding: 0,
			rentalCar: 0,
			monthId: 1,
			genId: 7
		};
	}

	handleChange(e, key) {
		this.setState({
			[key]: e.target.value
		});
	}

	handleClick = async () => {
		const {
			planeFare,
			accomidations,
			food,
			souveniers,
			petBoarding,
			rentalCar,
			monthId,
			genId
		} = this.state;
		const { user } = this.props;
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Plane Fare",
			total: planeFare,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Accomidations",
			total: accomidations,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Food",
			total: food,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Souveniers",
			total: souveniers,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Pet Boarding",
			total: petBoarding,
			genId: genId,
			monthId: monthId
		}).then(res => {});
		Axios.post(`/api/expenses/${user.id}`, {
			name: "Rental Car",
			total: rentalCar,
			genId: genId,
			monthId: monthId
		}).then(res => {});

		this.props.history.push("/form/eight");
	};

	render() {
		return (
			<div>
				<div>
					PAGE SEVEN
					<p>Plane Fare:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "planeFare")}
					/>
				</div>
				<div>
					<p>accomidations:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "accomidations")}
					/>
				</div>
				<div>
					<p>food:</p>
					<input type="number" onChange={e => this.handleChange(e, "food")} />
				</div>
				<div>
					<p>souveniers:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "souveniers")}
					/>
				</div>
				<div>
					<p>pet boarding:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "petBoarding")}
					/>
				</div>
				<div>
					<p>rental car:</p>
					<input
						type="number"
						onChange={e => this.handleChange(e, "rentalCar")}
					/>
				</div>
				<button onClick={() => this.handleClick()}></button>
			</div>
		);
	}
}

const mapStateToProps = state => state.user;

export default connect(mapStateToProps)(withRouter(WizardPageSeven));
