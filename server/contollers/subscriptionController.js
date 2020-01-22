module.exports = {
	switchSubscription: async (req, res) => {
		const db = req.app.get("db");
		const { id } = req.params;
		const subscriptiopnChange = await db.subscription.edit_subscription(id);
		if (subscriptiopnChange[0]) {
			return res.status(200).send("Subscription Changed");
		}

		res.status(401).send("Subscription not changed");
	}
};
