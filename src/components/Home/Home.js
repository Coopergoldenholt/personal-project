import React, { Component } from "react";
import { getUser } from "../../ducks/reducers/userReducer";
import { connect } from "react-redux";
import "./Home.scss";

class Home extends Component {
	componentDidMount() {
		this.props.getUser();
	}
	render() {
		return (
			<div>
				<div className="first-page">
					<p className="first-text">You Need This Budget App</p>
					<p className="second-text">alskdflkjsdflkasf</p>
					<button className="budgeting-button home-button">
						Start Budgeting!
					</button>
				</div>
				<div className="second-page">
					<p>
						Suspendisse venenatis posuere nisl, in convallis tellus egestas ut.
						Donec pulvinar, dui quis ornare molestie, quam orci ultrices risus,
						sed rhoncus magna est a metus. Curabitur sed volutpat velit,
						consectetur volutpat diam. Etiam porttitor eros a elit aliquam, eget
						accumsan nisl congue. Donec commodo purus ac eros ornare, ac
						pulvinar tortor euismod. Proin porttitor pellentesque eros vitae
						hendrerit. Sed purus dui, consectetur eget bibendum eu, vulputate et
						dui. Quisque ac mi dignissim odio tincidunt consequat vitae sit amet
						mauris. Proin feugiat, odio ut posuere tempus, est massa commodo
						enim, sed scelerisque odio turpis non sem. Ut id orci euismod dui
						scelerisque maximus vitae et nunc. Fusce finibus nec turpis mattis
						tincidunt. Interdum et malesuada fames ac ante ipsum primis in
						faucibus. Curabitur posuere lobortis iaculis. In ac luctus tellus, a
						lacinia quam.
					</p>
				</div>
				<div className="third-page">
					<p>The Road To Finaial Freedom Starts Here.</p>
					<button className="journey-button home-button">
						Start Your Journey
					</button>
				</div>
			</div>
		);
	}
}

export default connect(null, { getUser })(Home);
