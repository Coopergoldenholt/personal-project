import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, logout } from "../../ducks/reducers/userReducer";
import "./Nav.scss";

class Nav extends Component {
	render() {
		const { user } = this.props;
		if (user.loggedIn) {
			return (
				<div>
					<div className="header">
						<Link to="/">
							<p className="header-text">LOGO</p>
						</Link>
						<div className="header-right">
							<Link to="/dashboard">
								<p className="header-text">Dashboard</p>
							</Link>
							<Link to="/">
								<p className="header-text" onClick={() => this.props.logout()}>
									Logout
								</p>
							</Link>
						</div>
					</div>
				</div>
			);
		}

		return (
			<div>
				<div className="header">
					<Link to="/">
						<p className="header-text">LOGO</p>
					</Link>
					<div className="header-right">
						<Link to="/auth/login">
							<p className="header-text">Login</p>
						</Link>
						<Link to="/auth/register">
							<p className="header-text">SignUp</p>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state.user;
};

export default connect(mapStateToProps, { getUser, logout })(Nav);
