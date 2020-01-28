import axios from "axios";
import {
	GET_USER,
	SIGNUP,
	LOGIN,
	LOGOUT,
	TOGGLE_EDIT_TRUE,
	TOGGLE_EDIT_FALSE
} from "./actionTypes";

const initialState = {
	user: {},
	redirect: false,
	error: false,
	loading: false,
	editing: false
};

export const toggelEditTrue = () => {
	return {
		type: TOGGLE_EDIT_TRUE
	};
};
export const toggelEditFalse = () => {
	return {
		type: TOGGLE_EDIT_FALSE
	};
};

export const signup = (username, password, name, subscription, email) => {
	return {
		type: SIGNUP,
		payload: axios
			.post("/api/register", { username, password, name, subscription, email })
			.then(res => res.data)
			.catch(err => err.response)
	};
};

export const login = (username, password) => {
	return {
		type: LOGIN,
		payload: axios
			.post("/api/login", { username, password })
			.then(res => res.data)
			.catch(err => "Loggedin failed")
	};
};

export const getUser = () => {
	return {
		type: GET_USER,
		payload: axios.get("/api/user").then(res => res.data)
	};
};

export const logout = () => {
	return {
		type: LOGOUT,
		payload: axios.delete("/api/logout")
	};
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case TOGGLE_EDIT_TRUE:
			return {
				...state,
				editing: true
			};
		case TOGGLE_EDIT_FALSE:
			return {
				...state,
				editing: false
			};
		case `${LOGIN}_FULFILLED`:
			return {
				user: payload,
				redirect: false,
				error: false,
				loading: false
			};
		case `${LOGIN}_REJECTED`:
			return {
				...state,
				error: payload,
				loading: false
			};
		case `${LOGIN}_PENDING`:
			return {
				...state,
				loading: true
			};
		case `${SIGNUP}_FULFILLED`:
			return {
				redirect: false,
				user: payload,
				error: false,
				loading: false
			};
		case `${SIGNUP}_REJECTED`:
			return {
				...state,
				error: payload,
				loading: false
			};
		case `${SIGNUP}_PENDING`:
			return {
				...state,
				loading: true
			};
		case `${GET_USER}_FULFILLED`:
			return { ...state, user: payload, error: false };
		case `${GET_USER}_REJECTED`:
			return { ...state, redirect: true, error: payload };
		case `${LOGOUT}_FULFILLED`:
			return { user: {}, redirect: true, error: false };
		default:
			return state;
	}
}
