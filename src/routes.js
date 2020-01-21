import React from "react";
import { Switch, Route } from "react-router-dom";
import { Elements } from "react-stripe-elements";
import Home from "./components/Home/Home";
import DashBoard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Subscribe from "./components/Subscribe/Subscribe";
import WizardPageOne from "./components/Wizard/WizardPageOne";
import WizardPageTwo from "./components/Wizard/WizardPageTwo";
import WizardPageThree from "./components/Wizard/WizardPageThree";
import WizardPageFour from "./components/Wizard/WizardPageFour";
import WizardPageFive from "./components/Wizard/WizardPageFive";
import WizardPageSix from "./components/Wizard/WizardPageSix";
import WizardPageSeven from "./components/Wizard/WizardPageSeven";
import WizardPageEight from "./components/Wizard/WizardPageEight";
import WizardPageNine from "./components/Wizard/WizardPageNine";
import WizardPageTen from "./components/Wizard/WizardPageTen";
import WizardPageEleven from "./components/Wizard/WizardPageEleven";
import SubmitPage from "./components/Wizard/SubmitPage";
import NewCharge from "./components/NewCharge/NewCharge";

export default (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/dashboard" component={DashBoard} />
		<Route path="/auth/login" component={Login} />
		<Route path="/auth/register" component={SignUpForm} />
		<Route
			path="/auth/subscribe"
			render={() => (
				<Elements>
					<Subscribe />
				</Elements>
			)}
		/>
		<Route path="/form/one" component={WizardPageOne} />
		<Route path="/form/two" component={WizardPageTwo} />
		<Route path="/form/three" component={WizardPageThree} />
		<Route path="/form/four" component={WizardPageFour} />
		<Route path="/form/five" component={WizardPageFive} />
		<Route path="/form/six" component={WizardPageSix} />
		<Route path="/form/seven" component={WizardPageSeven} />
		<Route path="/form/eight" component={WizardPageEight} />
		<Route path="/form/nine" component={WizardPageNine} />
		<Route path="/form/ten" component={WizardPageTen} />
		<Route path="/form/eleven" component={WizardPageEleven} />
		<Route path="/form/submit" component={SubmitPage} />
		<Route path="/form/new-charge" component={NewCharge} />
	</Switch>
);
