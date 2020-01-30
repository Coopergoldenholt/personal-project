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
		const allExpenses = await db.expenses.get_expenses_by_user_id([userId]);
		res.status(200).send(allExpenses);
	},
	editSpending: async (req, res) => {
		const db = req.app.get("db");
		const { spending, genId, monthId, name } = req.body;
		const { userId } = req.params;
		const [expenses] = await db.expenses.edit_spending([
			userId,
			genId,
			monthId,
			name,
			spending
		]);
		console.log(expenses);
		await db.expenses.edit_charges([
			name,
			spending,
			userId,
			genId,
			monthId,
			expenses.id
		]);
		res.status(200).send("Spending Added");
	},
	editExpenses: async (req, res) => {
		const db = req.app.get("db");
		const { total, genId, monthId, name } = req.body;
		const { userId } = req.params;
		await db.expenses.edit_expenses([userId, genId, monthId, name, total]);

		res.status(200).send("Expense Edited");
	},
	getSumExpenses: async (req, res) => {
		const db = req.app.get("db");
		const { userId } = req.params;
		const expenseSums = await db.expenses.get_sum_expenses([userId]);
		res.status(200).send(expenseSums);
	},
	getSumSpending: async (req, res) => {
		const db = req.app.get("db");
		const { userId } = req.params;
		const expenseSums = await db.expenses.get_sum_spending([userId]);
		res.status(200).send(expenseSums);
	},
	getCharges: async (req, res) => {
		const db = req.app.get("db");
		const { userId } = req.params;
		const { monthId } = req.query;
		console.log(monthId);
		const charges = await db.expenses.get_charges([userId, monthId]);
		res.status(200).send(charges);
	},
	deleteExpense: async (req, res) => {
		const db = req.app.get("db");
		const { expenseId } = req.params;
		const { charge } = req.query;
		console.log(expenseId);
		console.log(charge);
		await db.expenses.delete_charge_expense([expenseId, charge]);
		res.sendStatus(200);
	}
};
