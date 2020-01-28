import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../../ducks/reducers/userReducer";
import "./Subscribe.scss";

class Subscribe extends Component {
	constructor() {
		super();
		this.submit = this.submit.bind(this);
	}
	componentDidMount() {
		const { id } = this.props.user.user;
		this.props.getUser();
	}
	async submit() {
		const { id } = this.props.user.user;
		let token = await this.props.stripe.createToken({ name: "name" });

		let response = await axios.post("/charge", { token });

		if (response.status === 200) {
			axios.put(`/api/subscription/${id}`).then(res => {
				this.props.getUser();
				alert("Thank You For Your Purcahse!");
				this.props.history.push("/form/one");
			});
		} else {
			alert("Your Payment Could Not Be Proccessed");
		}
	}
	render() {
		// const { error, redirect, loading } = this.props.user;
		// const { subscription } = this.props.user.user;
		// if (error || redirect) {
		// 	alert("Please Login or Creat An Account");
		// 	this.props.history.push("/auth/login");
		// }
		// if (subscription) {
		// 	alert("You Are Already Subscribed");
		// 	this.props.history.push("/dashboard");
		// }

		return (
			<div className="checkout">
				<div className="checkout-container">
					<p className="subscribe-first-text">
						Would you like to complete this puurchase?
					</p>
					<p className="subscribe-second-text">
						$5 will be pulled out of your account monthly.
					</p>
					<div className="stripe">
						<CardElement />
					</div>
					<button className="subscribe-button" onClick={this.submit}>
						Subscribe
					</button>
				</div>
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

export default injectStripe(
	connect(mapStateToProps, { getUser })(withRouter(Subscribe))
);
