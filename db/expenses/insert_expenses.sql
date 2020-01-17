insert into expenses(name, total, user_id, gen_id, month_id)
values($1, $2, $3, $4, $5)

returning *