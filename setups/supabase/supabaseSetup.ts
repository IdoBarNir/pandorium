import { writeFile } from "fs/promises";

import { PROJECT_PATH } from "@config";
import { execAsync } from "@utils";
import { supabaseConfig } from "./utils";

export const supabaseSetup = async () => {
  console.log("\nsetting up Supabase...\n");
  try {
    await execAsync({
      command: `cd ${PROJECT_PATH} && yarn add @supabase/supabase-js dotenv`,
      options: {
        stdio: "inherit",
      },
    });

    const envContent = `SUPABASE_URL=${supabaseConfig.url}
SUPABASE_ANON_KEY=${supabaseConfig.anonKey}
`;
    await writeFile(`${PROJECT_PATH}/.env`, envContent);

    const configContent = `import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
`;

    await writeFile(`${PROJECT_PATH}/supabaseConfig.ts`, configContent);

    console.log("\nSupabase was setup successfully!\n");
  } catch (error) {
    throw new Error(`\nSupabase setup failed: ${error.message}\n`);
  }
};
