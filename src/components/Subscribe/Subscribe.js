import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../../ducks/reducers/userReducer";
import "./Subscribe.scss";
import { FadeLoader } from "react-spinners";

class Subscribe extends Component {
	constructor() {
		super();
		this.state = {
			loading: false
		};
		this.submit = this.submit.bind(this);
	}
	componentDidMount() {
		this.props.getUser();
	}
	async submit() {
		const { id } = this.props.user.user;
		let token = await this.props.stripe.createToken({ name: "name" });
		this.setState({
			loading: true
		});

		let response = await axios.post("/charge", { token }).catch(err => {
			this.setState({
				loading: false
			});
			return { status: 500 };
		});

		if (response.status === 200) {
			axios
				.put(`/api/subscription/${id}`)
				.then(res => {
					this.setState({
						loading: false
					});
					this.props.getUser();
					alert("Thank You For Your Purcahse!");
					this.props.history.push("/form/one");
				})
				.catch(err => this.setState({ loading: false }));
		} else {
			alert("Your Payment Could Not Be Proccessed");
		}
	}
	render() {
		const { error, redirect } = this.props.user;
		const { subscription } = this.props.user.user;
		if (error || redirect) {
			alert("Please Login or Creat An Account");
			this.props.history.push("/auth/login");
		}
		if (subscription) {
			alert("You Are Already Subscribed");
			this.props.history.push("/dashboard");
		}

		return !this.state.loading ? (
			<div className="checkout">
				<div className="checkout-container">
					<p className="subscribe-header">Subscribe Now!</p>
					<p className="subscribe-first-text">
						Are you tired of the same old budgeting apps that don't help you?
						Subscribe for $5 to acess the best budgeting app the world has ever
						seen!
					</p>
					<p className="subscribe-second-text">
						We accept all forms of credit debit cards!
					</p>
					<div className="stripe">
						<CardElement />
					</div>
					<p className="subscribe-third-text">
						By clicking Subscribe, you acknowledge that your card will be
						charged $5.
					</p>
					<button className="subscribe-button" onClick={this.submit}>
						Subscribe
					</button>
				</div>
			</div>
		) : (
			<div className="subscribe-loader">
				<FadeLoader size={"150px"} color={"#164c10"} />
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
