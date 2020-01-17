import axios from "axios";
import { GET_USER, SIGNUP, LOGIN, LOGOUT } from "./actionTypes";

const initialState = {
	user: {},
	redirect: false,
	error: false,
	loading: false
};

export const signup = (username, password, name, subscription) => {
	return {
		type: SIGNUP,
		payload: axios
			.post("/api/register", { username, password, name, subscription })
			.then(res => res.data)
	};
};

export const login = (username, password) => {
	return {
		type: LOGIN,
		payload: axios
			.post("/api/login", { username, password })
			.then(res => res.data)
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
