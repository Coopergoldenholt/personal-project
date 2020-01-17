module.exports = {
	saveExpenses: async (req, res) => {
		const db = req.app.get("db");
		const { name, total, genId, monthId } = req.body;
		console.log(req.body);
		const { userId } = req.params;
		const newBudget = await db.expenses.insert_expenses([
			name,
			total,
			userId,
			genId,
			monthId
		]);
		console.log("added");
		res.status(200).send("Budget Added");
	},
	getExpenses: async (req, res) => {
		const db = req.app.get("db");
		const { userId } = req.params;
		const categoryBudget = await db.expenses.get_expenses_by_gen_id([userId]);
		console.log(categoryBudget);
		res.status(200).send(categoryBudget);
	}
};
