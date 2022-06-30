import dotenv from "dotenv";

dotenv.config();
export const nodenv = process.env.NODE_ENV;
export const host = process.env.HOST;
export const port = process.env.PORT;
export const db_host = process.env.MYSQL_DATABASE_HOST;
export const db_user = process.env.MYSQL_DATABASE_USER;
export const db_pass = process.env.MYSQL_DATABASE_PASS;
export const db_name = process.env.MYSQL_DATABASE_NAME;