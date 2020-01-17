import React, { Component } from "react";
import { login, getUser } from "../../ducks/reducers/userReducer";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

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
		if (user.loggedIn) return <Redirect to="/dashboard" />;
		return (
			<div>
				<div>
					<p>Username:</p>
					<input onChange={e => this.handleChange(e, "username")} />
				</div>
				<div>
					<p>Password:</p>
					<input
						type="password"
						onChange={e => this.handleChange(e, "password")}
					/>
				</div>
				<button onClick={() => this.login()}>Login</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state.user;
};

export default connect(mapStateToProps, { login, getUser })(withRouter(Login));
