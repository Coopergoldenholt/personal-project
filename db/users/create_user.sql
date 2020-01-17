insert into users (username, password, full_name, subscription)
values ($1, $2, $3, $4)
returning *