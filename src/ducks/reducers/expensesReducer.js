import axios from "axios";
import {
	GET_EXPENSES,
	GET_SUM_EXPENSES,
	GET_SUM_SPENDING,
	GET_CHARGES,
	TOGGLE_CHARGES_TRUE,
	TOGGLE_CHARGES_FALSE
} from "./actionTypes";

const initialState = {
	revenue: [],
	totalSums: [],
	spendingSums: [],
	charges: [],
	showCharges: false
};

export const toggleChargesTrue = () => {
	return {
		type: TOGGLE_CHARGES_TRUE
	};
};
export const toggleChargesFalse = () => {
	return {
		type: TOGGLE_CHARGES_FALSE
	};
};

export const getExpenses = userId => {
	return {
		type: GET_EXPENSES,
		payload: axios.get(`/api/expenses/${userId}`).then(res => res.data)
	};
};
export const getCharges = (userId, monthId) => {
	return {
		type: GET_CHARGES,
		payload: axios
			.get(`/api/charges/${userId}?monthId=${monthId}`)
			.then(res => res.data)
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
		case TOGGLE_CHARGES_TRUE:
			return {
				...state,
				showCharges: true
			};
		case TOGGLE_CHARGES_FALSE:
			return {
				...state,
				showCharges: false
			};
		case `${GET_EXPENSES}_FULFILLED`:
			return { ...state, revenue: payload };
		case `${GET_CHARGES}_FULFILLED`:
			return { ...state, charges: payload };
		case `${GET_SUM_EXPENSES}_FULFILLED`:
			return { ...state, totalSums: payload };
		case `${GET_SUM_SPENDING}_FULFILLED`:
			return { ...state, spendingSums: payload };
		default:
			return state;
	}
}
