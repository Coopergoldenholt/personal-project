import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, logout } from "../../ducks/reducers/userReducer";
import "./Nav.scss";
import { HamburgerElastic } from "react-animated-burgers";

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			isMobile: window.innerWidth < 400,
			isActive: false
		};
	}

	toggleButton = () => {
		this.setState({
			isActive: !this.state.isActive
		});
	};

	handleMobileNavClick = () => {
		this.setState({
			isActive: false
		});
	};

	handleMobileNavLogout = () => {
		this.handleMobileNavClick();
		this.props.logout();
	};

	render() {
		const { user } = this.props;
		if (user.loggedIn) {
			return !this.state.isMobile ? (
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
			) : (
				<div>
					<div className="header">
						<Link to="/">
							<p className="header-text">LOGO</p>
						</Link>
						<div></div>

						<HamburgerElastic
							isActive={this.state.isActive}
							toggleButton={this.toggleButton}
							barColor="white"
						/>
					</div>
					<div
						className={
							!this.state.isActive
								? "nav-right-mobile-hide"
								: "nav-right-mobile-show"
						}
					>
						<Link to="/dashboard">
							<p className="nav-show" onClick={this.handleMobileNavClick}>
								Dashboard
							</p>
						</Link>
						<Link to="/">
							<p
								className="nav-show"
								onClick={() => this.handleMobileNavLogout()}
							>
								Logout
							</p>
						</Link>
					</div>
				</div>
			);
		}

		return !this.state.isMobile ? (
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
		) : (
			<div>
				<div className="header">
					<Link to="/">
						<p className="header-text">LOGO</p>
					</Link>
					<div></div>

					<HamburgerElastic
						isActive={this.state.isActive}
						toggleButton={this.toggleButton}
						barColor="white"
					/>
				</div>
				<div
					className={
						!this.state.isActive
							? "nav-right-mobile-hide"
							: "nav-right-mobile-show"
					}
				>
					<Link to="/auth/login">
						<p className="nav-show" onClick={this.handleMobileNavClick}>
							Login
						</p>
					</Link>
					<Link to="/auth/register">
						<p className="nav-show" onClick={this.handleMobileNavClick}>
							SignUp
						</p>
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
