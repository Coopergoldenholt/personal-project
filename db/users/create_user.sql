insert into users (username, password, full_name, subscription, email)
values ($1, $2, $3, $4, $5)
returning *