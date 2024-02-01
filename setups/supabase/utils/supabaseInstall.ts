import { PROJECT_PATH } from "@config";
import { execAsync } from "@utils";

export const supabaseInstall = async () =>
  await execAsync({
    command: `cd ${PROJECT_PATH} && yarn add @supabase/supabase-js dotenv`,
    options: {
      stdio: "inherit",
    },
  });
