import { execSync } from "child_process";
import fs from "fs";

export const setupSupabase = async ({
  projectPath,
  supabaseUrl,
  supabaseAnonKey,
}: {
  projectPath: string;
  supabaseUrl: string;
  supabaseAnonKey: string;
}) => {
  execSync(`cd ${projectPath} && yarn add @supabase/supabase-js dotenv`, {
    stdio: "inherit",
  });

  const envContent = `SUPABASE_URL=${supabaseUrl}
SUPABASE_ANON_KEY=${supabaseAnonKey}
`;
  fs.writeFileSync(`${projectPath}/.env`, envContent);

  const configContent = `import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
`;

  fs.writeFileSync(`${projectPath}/supabaseConfig.ts`, configContent);
};

export default setupSupabase;
