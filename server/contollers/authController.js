const bcrypt = require("bcryptjs");
const saltRounds = 12;

module.exports = {
	register: async (req, res) => {
		const db = req.app.get("db");
		const { username, password, name, subscription } = req.body;
		const [existingUser] = await db.users.get_user_by_username(username);
		if (existingUser) {
			return res.status(400).send("Username exists already");
		}
		const salt = await bcrypt.genSalt(saltRounds);
		const hash = await bcrypt.hash(password, salt);
		const [user] = await db.users.create_user([
			username,
			hash,
			name,
			subscription
		]);
		req.session.user = { username: user.username, id: user.id, loggedIn: true };
		res.send(req.session.user);
		console.log(req.session.user);
	},

	login: async (req, res) => {
		const db = req.app.get("db");
		const { username, password } = req.body;
		const [existingUser] = await db.users.get_user_by_username(username);
		if (!existingUser) {
			return res.status(401).send("Username or password incorrect");
		}
		const result = await bcrypt.compare(password, existingUser.password);
		if (result) {
			req.session.user = {
				username: existingUser.username,
				id: existingUser.id,
				loggedIn: true
			};
			res.send(req.session.user);
		} else res.status(401).send("Username or password incorrect");
		console.log(req.session.user);
	},

	getUser: (req, res) => {
		res.send(req.session.user);
	},

	logout: (req, res) => {
		req.session.destroy();
		res.sendStatus(200);
	}
};
