module.exports = {
	switchSubscription: async (req, res) => {
		const db = req.app.get("db");
		const { id } = req.params;
		const [user] = await db.subscription.edit_subscription(id);
		req.session.user = {
			username: user.username,
			id: user.id,
			loggedIn: true,
			subscription: user.subscription
		};
		if (user.id) {
			return res.status(200).send(req.session.user);
		}

		res.status(401).send("Subscription not changed");
	}
};
