import mysql from "serverless-mysql";
import { SQLStatement } from "sql-template-strings";

// process.envに移す
const db = mysql({
  config: {
    host: "127.0.0.1",
    port: 3306,
    database: "todo",
    user: "root",
    password: "P@ssw0rd",
  },
});

export const query = async <T>(query: string) => {
  const results: T = await db.query(query);
  await db.end();
  return results;
};
