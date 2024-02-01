import { writeFile } from "fs/promises";

import { PROJECT_PATH } from "@config";
import { supabaseInstall } from "./utils";
import { configContent, envContent } from "./heirloom";

export const supabaseSetup = async () => {
  await supabaseInstall();

  await writeFile(`${PROJECT_PATH}/.env`, envContent);
  await writeFile(`${PROJECT_PATH}/supabaseConfig.ts`, configContent);
};
