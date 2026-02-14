import sql, { Database } from "k6/x/sql";
import driver from "k6/x/sql/driver/postgres";

export const connect = (db: string): Database => sql.open(driver, db);
export const disconnect = (db: Database): void => db.close();
