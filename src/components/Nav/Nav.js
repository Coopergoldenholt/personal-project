import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, logout } from "../../ducks/reducers/userReducer";

class Nav extends Component {
	render() {
		const { user } = this.props;
		if (user.loggedIn) {
			return (
				<Link to="/">
					<div onClick={() => this.props.logout()}>Logout</div>
				</Link>
			);
		}

		return (
			<div>
				<div>
					<Link to="/">
						<div>LOGO</div>
					</Link>
					<Link to="/auth/login">
						<div>Login</div>
					</Link>
					<Link to="/auth/register">
						<div>SignUp</div>
					</Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state.user;
};

export default connect(mapStateToProps, { getUser, logout })(Nav);
