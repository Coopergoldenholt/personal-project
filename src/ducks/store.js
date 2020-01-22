import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/userReducer";
import expensesReducer from "./reducers/expensesReducer";

const rootReducer = combineReducers({
	user: userReducer,
	revenue: expensesReducer
});

export default createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(promiseMiddleware))
);
