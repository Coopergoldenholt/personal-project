import React, { Component } from "react";
import { login, getUser } from "../../ducks/reducers/userReducer";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			password: ""
		};
	}

	handleChange(e, key) {
		this.setState({
			[key]: e.target.value
		});
	}

	login() {
		const { username, password } = this.state;
		this.props.login(username, password);
	}

	render() {
		const { user } = this.props;
		if (user.loggedIn) {
			alert("You Are Now Logged In");
			this.props.history.push("/dashboard");
		}
		if (this.props.user === "Loggedin failed") {
			alert("Username or Password Incorrect");
		}
		return (
			<div className="login">
				<div className="login-container">
					<div className="username-input">
						<p className="username">Username:</p>
						<input
							className="login-input"
							onChange={e => this.handleChange(e, "username")}
						/>
					</div>
					<div className="password-input">
						<p className="password">Password:</p>
						<input
							className="login-input"
							type="password"
							onChange={e => this.handleChange(e, "password")}
						/>
					</div>

					<button className="login-button" onClick={() => this.login()}>
						Login
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state.user;
};

export default connect(mapStateToProps, { login, getUser })(withRouter(Login));
