module.exports = {
	saveExpenses: async (req, res) => {
		const db = req.app.get("db");
		const { name, total, genId, monthId } = req.body;
		const { userId } = req.params;
		const newBudget = await db.expenses.insert_expenses([
			name,
			total,
			userId,
			genId,
			monthId
		]);
		res.status(200).send("Budget Added");
	},
	getExpenses: async (req, res) => {
		const db = req.app.get("db");
		const { userId } = req.params;
		const categoryBudget = await db.expenses.get_expenses_by_gen_id([userId]);
		res.status(200).send(categoryBudget);
	},
	editExpenses: async (req, res) => {
		const db = req.app.get("db");
		const { spending, genId, monthId, name } = req.body;
		const { userId } = req.params;
		console.log(req.body);
		console.log(req.params);
		await db.expenses.edit_expenses([userId, genId, monthId, name, spending]);

		res.status(200).send("Spending Added");
	}
};
