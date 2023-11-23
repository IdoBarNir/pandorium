import inquirer from "inquirer";

import {
  setupExpress,
  setupMui,
  setupNext,
  setupSupabase,
  setupVercel,
} from "@setups/index.js";
import {
  createDirectory,
  installYarn,
  isYarnInstalled,
} from "./pandorium.utils.js";

const pandorium = async (): Promise<void> => {
  const answers = await inquirer.prompt([
    { type: "input", name: "projectName", message: "Project name:" },
    { type: "input", name: "supabaseUrl", message: "Your Supabase URL:" },
    {
      type: "input",
      name: "supabaseAnonKey",
      message: "Your Supabase Anon Key:",
    },
  ]);

  const projectPath = `../${answers.projectName}`;
  createDirectory(projectPath);

  if (!isYarnInstalled()) {
    installYarn();
  }

  await setupNext(projectPath);
  await setupMui(projectPath);
  await setupExpress(projectPath);
  await setupSupabase({
    projectPath,
    supabaseUrl: answers.supabaseUrl,
    supabaseAnonKey: answers.supabaseAnonKey,
  });
  await setupVercel(projectPath);

  console.log("Project setup complete!");
};

pandorium().catch(console.error);
