require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const authCtrl = require("./contollers/authController");
const authCheck = require("./middleware/authCheck");
const initSession = require("./middleware/initSession");
const expCtrl = require("./contollers/expensesController");

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

massive(CONNECTION_STRING).then(db => {
	app.set("db", db);
	app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is listening`));
});