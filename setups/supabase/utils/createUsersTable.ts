import { Pool } from "pg";
import dotenv from "dotenv";

import { readFileAsync } from "@utils";

export const createUsersTable = async () => {
  const userProfilesTableCommand = await readFileAsync({
    fileName: "user_profiles",
    fileType: "sql",
    local: true,
  });

  dotenv.config();

  const pool = new Pool({
    connectionString: process.env.SUPABASE_CONNECTION_STRING,
  });

  await pool.query(userProfilesTableCommand);
};
