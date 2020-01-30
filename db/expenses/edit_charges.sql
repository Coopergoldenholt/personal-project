insert into charge(name, amount, user_id, gen_id, month_id, expense_id)
values($1, $2, $3, $4, $5, $6)

returning *