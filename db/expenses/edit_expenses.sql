update expenses
set total = $5
where user_id = $1 AND gen_id = $2 and month_id = $3 and name = $4;