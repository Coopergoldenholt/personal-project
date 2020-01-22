select sum(e.total) from expenses e
join general_category g on g.gen_id = e.gen_id
 where e.user_id = $1 group by g.gen_id order by g.gen_id; 