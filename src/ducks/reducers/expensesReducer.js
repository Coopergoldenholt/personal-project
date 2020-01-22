import axios from "axios";
import { GET_EXPENSES, GET_SUM_EXPENSES } from "./actionTypes";

const initialState = {
	revenue: [],
	totalSums: []
};

export const getExpenses = userId => {
	return {
		type: GET_EXPENSES,
		payload: axios.get(`/api/expenses/${userId}`).then(res => res.data)
	};
};
export const getSumExpenses = userId => {
	return {
		type: GET_SUM_EXPENSES,
		payload: axios.get(`/api/expenses/total/${userId}`).then(res => res.data)
	};
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case `${GET_EXPENSES}_FULFILLED`:
			return { ...state, revenue: payload };
		case `${GET_SUM_EXPENSES}_FULFILLED`:
			return { ...state, totalSums: payload };
		default:
			return state;
	}
}
