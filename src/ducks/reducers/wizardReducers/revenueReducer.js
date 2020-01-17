import axios from "axios";
import { GET_REVENUE_EXPENSE } from "../actionTypes";

const initialState = {
	revenue: []
};

export const getRevenueExpense = userId => {
	return {
		type: GET_REVENUE_EXPENSE,
		payload: axios.get(`/api/expenses/${userId}`).then(res => res.data)
	};
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case `${GET_REVENUE_EXPENSE}_FULFILLED`:
			return { ...state, revenue: payload };
		default:
			return state;
	}
}
