import React, { Component } from "react";
import { getUser } from "../../ducks/reducers/userReducer";
import { connect } from "react-redux";

class Home extends Component {
	componentDidMount() {
		this.props.getUser();
	}
	render() {
		return <div>Home</div>;
	}
}

export default connect(null, { getUser })(Home);
