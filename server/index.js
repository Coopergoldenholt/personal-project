require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const {
	SERVER_PORT,
	SESSION_SECRET,
	CONNECTION_STRING,
	SECRET_KEY
} = process.env;
const authCtrl = require("./contollers/authController");
const authCheck = require("./middleware/authCheck");
const initSession = require("./middleware/initSession");
const expCtrl = require("./contollers/expensesController");
const stripe = require("stripe")(SECRET_KEY);
const subCtrl = require("./contollers/subscriptionController");

const app = express();

app.use(express.json());
app.use(
	session({
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: true
	})
);

app.use(initSession);

// * user endpoints
app.post("/api/register", authCtrl.register);
app.post("/api/login", authCtrl.login);
app.get("/api/user", authCheck, authCtrl.getUser);
app.delete("/api/logout", authCtrl.logout);

//* expense endpoints
app.post("/api/expenses/:userId", expCtrl.saveExpenses);
app.get("/api/expenses/:userId", expCtrl.getExpenses);
app.put(`/api/spending/:userId`, expCtrl.editSpending);
app.put(`/api/expenses/:userId`, expCtrl.editExpenses);
app.get(`/api/expenses/total/:userId`, expCtrl.getSumExpenses);
app.get(`/api/expenses/spending/:userId`, expCtrl.getSumSpending);
app.get(`/api/charges/:userId`, expCtrl.getCharges);
app.delete(`/api/expenses/:expenseId`, expCtrl.deleteExpense);

//*stripe endpoint
app.post("/charge", async (req, res) => {
	try {
		let { status } = await stripe.charges.create({
			amount: 500,
			currency: "usd",
			source: req.body.token.token.id
		});

		return res.status(200).send({ status });
	} catch (err) {
		res.status(500).send(err);
	}
});

//*Subscription Endpoint
app.put("/api/subscription/:id", subCtrl.switchSubscription);

massive(CONNECTION_STRING).then(db => {
	app.set("db", db);
	app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is listening`));
});
