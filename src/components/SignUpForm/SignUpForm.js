import React, { Component } from "react";
import { signup } from "../../ducks/reducers/userReducer";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { getUser, logout } from "../../ducks/reducers/userReducer";

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
		const { username, password, name, subscription } = this.state;
		this.props.signup(username, password, name, subscription);
	};

	render() {
		const { user } = this.props;
		if (user.data === "Username exists already") {
			alert(user.data);
			this.props.logout();
		}
		if (user.username) return <Redirect to="/auth/subscribe" />;
		// if (user.loggedIn) return <Redirect to="/form/wizard" />;
		return (
			<div>
				<div>
					Name:
					<input onChange={e => this.handleChange(e, "name")} />
				</div>
				<div>
					Email:
					<input onChange={e => this.handleChange(e, "email")} />
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

export default connect(mapStateToProps, { signup, getUser, logout })(
	withRouter(SignUpForm)
);
