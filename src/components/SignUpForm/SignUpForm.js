import React, { Component } from "react";
import { signup } from "../../ducks/reducers/userReducer";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

class SignUpForm extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			username: "",
			password: "",
			subscription: false
		};
	}

	handleChange = (e, key) => {
		this.setState({
			[key]: e.target.value
		});
	};

	signUpUser = () => {
		const { username, password, name, subscription } = this.state;
		this.props.signup(username, password, name, subscription);
		this.props.history.push("/auth/subscribe");
	};

	render() {
		const { user } = this.props;
		if (user.loggedIn) return <Redirect to="/form/wizard" />;
		return (
			<div>
				<div>
					Name:
					<input onChange={e => this.handleChange(e, "name")} />
				</div>
				<div>
					Username:
					<input onChange={e => this.handleChange(e, "username")} />
				</div>
				<div>
					Password:
					<input
						type="password"
						onChange={e => this.handleChange(e, "password")}
					/>
				</div>
				<button onClick={this.signUpUser}>CREATE USER</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state.user;
};

export default connect(mapStateToProps, { signup })(withRouter(SignUpForm));
