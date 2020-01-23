import axios from "axios";
import {
	GET_EXPENSES,
	GET_SUM_EXPENSES,
	GET_SUM_SPENDING
} from "./actionTypes";

const initialState = {
	revenue: [],
	totalSums: [],
	spendingSums: []
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
export const getSumSpending = userId => {
	return {
		type: GET_SUM_SPENDING,
		payload: axios.get(`/api/expenses/spending/${userId}`).then(res => res.data)
	};
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case `${GET_EXPENSES}_FULFILLED`:
			return { ...state, revenue: payload };
		case `${GET_SUM_EXPENSES}_FULFILLED`:
			return { ...state, totalSums: payload };
		case `${GET_SUM_SPENDING}_FULFILLED`:
			return { ...state, spendingSums: payload };
		default:
			return state;
	}
}
