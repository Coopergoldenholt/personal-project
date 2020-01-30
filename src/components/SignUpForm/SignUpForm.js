import React, { Component } from "react";
import { signup } from "../../ducks/reducers/userReducer";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { getUser, logout } from "../../ducks/reducers/userReducer";
import "./SignUpForm.scss";

class SignUpForm extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			username: "",
			password: "",
			email: "",
			subscription: false
		};
	}

	componentDidMount() {
		this.props.getUser();
	}

	handleChange = (e, key) => {
		this.setState({
			[key]: e.target.value
		});
	};

	signUpUser = () => {
		const { username, password, name, subscription, email } = this.state;
		this.props.signup(username, password, name, subscription, email);
	};

	render() {
		const { user } = this.props;
		if (user.data === "Username exists already") {
			alert(user.data);
			this.props.logout();
		}
		if (user.username) return <Redirect to="/auth/subscribe" />;
		if (user.loggedIn && user.subscription) return <Redirect to="/dashboard" />;
		return (
			<div className="signup">
				<div className="signup-container">
					<p className="register">Register</p>
					<div className="input-text-container">
						<div className="text-input">
							<p className="signup-text">Name:</p>
							<input
								className="login-input"
								onChange={e => this.handleChange(e, "name")}
							/>
						</div>
						<div className="text-input">
							<p className="signup-text">Email:</p>
							<input
								className="login-input"
								onChange={e => this.handleChange(e, "email")}
							/>
						</div>
						<div className="text-input">
							<p className="signup-text">Username:</p>
							<input
								className="login-input"
								onChange={e => this.handleChange(e, "username")}
							/>
						</div>
						<div className="text-input">
							<p className="signup-text">Password:</p>
							<input
								className="login-input"
								type="password"
								onChange={e => this.handleChange(e, "password")}
							/>
						</div>
						<button className="create-user-button" onClick={this.signUpUser}>
							CREATE USER
						</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state.user;
};

export default connect(mapStateToProps, { signup, getUser, logout })(
	withRouter(SignUpForm)
);
