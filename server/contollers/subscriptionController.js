const nodemailer = require("nodemailer");
require("dotenv").config();
const { EMAIL_PASS } = process.env;

let transporter = nodemailer.createTransport({
	host: "smtp.mail.outlook.com",
	service: "outlook",
	auth: {
		user: "coopergoldenholt@outlook.com",
		pass: EMAIL_PASS
	},
	tls: {
		rejectUnauthorized: false
	}
});

module.exports = {
	switchSubscription: async (req, res) => {
		const db = req.app.get("db");
		const { id } = req.params;
		const [user] = await db.subscription.edit_subscription(id);
		req.session.user = {
			username: user.username,
			id: user.id,
			loggedIn: true,
			subscription: user.subscription,
			email: user.email
		};
		if (user.id) {
			transporter.sendMail({
				from: "coopergoldenholt@outlook.com", // sender address
				to: user.email, // list of receivers
				subject: "Hello ✔", // Subject line
				html: "<div>Thank You For Your Purchase!</div>"
			});
			return res.status(200).send(req.session.user);
		}

		res.status(401).send("Subscription not changed");
	}
};
