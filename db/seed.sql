CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "full_name" varchar,
  "subscription" boolean,
  "username" varchar(100) unique,
  "password" text
);

CREATE TABLE "expeneses" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "total" int,
  "spending" int,
  "user_id" int,
  "gen_id" int,
  "month_id" int
);

CREATE TABLE "general_category" (
  "gen_id" SERIAL PRIMARY KEY,
  "name" varchar(100)
);

CREATE TABLE "months" (
  "month_id" SERIAL PRIMARY KEY,
  "user_id" int,
  "date" varchar(100)
);

ALTER TABLE "expeneses" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "expeneses" ADD FOREIGN KEY ("gen_id") REFERENCES "general_category" ("gen_id");

ALTER TABLE "expeneses" ADD FOREIGN KEY ("month_id") REFERENCES "months" ("month_id");

ALTER TABLE "months" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE users
ADD email varchar(100);