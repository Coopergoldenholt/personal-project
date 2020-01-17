import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/userReducer";
import dailyLiving from "./reducers/wizardReducers/dailyLivingReducer";
import entertainmentReducer from "./reducers/wizardReducers/entertainmentReducer";
import financialObligationsReducer from "./reducers/wizardReducers/financialObligationsReducer";
import healthReducer from "./reducers/wizardReducers/healthReducer";
import homeReducer from "./reducers/wizardReducers/homeReducer";
import personalReducer from "./reducers/wizardReducers/personalReducer";
import recreactionReducer from "./reducers/wizardReducers/recreationReducer";
import revenueReducer from "./reducers/wizardReducers/revenueReducer";
import subscriptionReducer from "./reducers/wizardReducers/subscriptionReducer";
import transportainoReducer from "./reducers/wizardReducers/transportationReducer";
import vacationReducer from "./reducers/wizardReducers/vacationReducer";

const rootReducer = combineReducers({
	user: userReducer,
	daily: dailyLiving,
	entertainment: entertainmentReducer,
	financialObligations: financialObligationsReducer,
	health: healthReducer,
	home: homeReducer,
	personal: personalReducer,
	recreation: recreactionReducer,
	revenue: revenueReducer,
	subscription: subscriptionReducer,
	transportation: transportainoReducer,
	vacation: vacationReducer
});

export default createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(promiseMiddleware))
);
