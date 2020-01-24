update users
set subscription = true
where id = $1
returning  *