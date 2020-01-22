import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

class Subscribe extends Component {
	constructor() {
		super();
		this.submit = this.submit.bind(this);
	}
	async submit() {
		const { id } = this.props.user.user;
		let token = await this.props.stripe.createToken({ name: "name" });

		let response = await axios.post("/charge", { token });

		if (response.status === 200) {
			alert("Thank You For Your Purcahse!");
			axios.post(`/api/subscription/${id}`).then(res => {
				this.props.history.push("/form/one");
			});
		} else {
			alert("Your Payment Could Not Be Proccessed");
		}
	}
	render() {
		return (
			<div className="checkout">
				<p>Would you like to complete the purchase?</p>
				<CardElement />
				<button onClick={this.submit}>Purchase</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { user } = state;
	return {
		user
	};
};

export default injectStripe(connect(mapStateToProps)(withRouter(Subscribe)));
