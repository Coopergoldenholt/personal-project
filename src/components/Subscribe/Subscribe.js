import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

class Subscribe extends Component {
	constructor() {
		super();
		this.submit = this.submit.bind(this);
	}
	async submit() {
		let { token } = await this.props.stripe.createToken({ name: "Name" });
		console.log(token);
		let response = await fetch("/charge", {
			method: "POST",
			headers: { "Content-Type": "text/plain" },
			body: token.id
		});

		if (response.ok) console.log("Purchase Complete!");
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

export default injectStripe(Subscribe);
