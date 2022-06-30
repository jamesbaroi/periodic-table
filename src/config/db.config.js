import mysql from 'mysql';
import { db_host, db_user, db_pass, db_name } from './env.config.js';

export const db = mysql.createPool({
  host: db_host,
  user: db_user,
  password: db_pass,
  database: db_name
});