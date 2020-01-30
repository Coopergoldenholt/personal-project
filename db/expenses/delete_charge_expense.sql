update expenses
set spending = spending - $2
where id = $1;
delete from charge where expense_id = $1;