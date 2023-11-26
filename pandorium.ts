import { execSync } from "child_process";

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
  readConfig,
} from "./pandorium.utils.js";

const pandorium = async () => {
  const configPath = "./pandoriumConfig.json";
  const config = readConfig({ configPath });

  if (!config.projectName || !config.supabaseUrl || !config.supabaseAnonKey) {
    throw new Error("Please fill in all required fields in config.json");
  }

  const projectPath = `../${config.projectName}`;

  createDirectory({ projectPath });

  if (!isYarnInstalled()) {
    installYarn();
  }

  await setupNext({ projectPath });
  await setupMui({ projectPath });
  await setupExpress({ projectPath });
  await setupSupabase({
    projectPath,
    supabaseUrl: config.supabaseUrl,
    supabaseAnonKey: config.supabaseAnonKey,
  });
  await setupVercel({ projectPath });

  console.log("Running yarn build...");
  execSync("yarn build", { stdio: "inherit", cwd: projectPath });

  console.log("Starting the application...");
  execSync("yarn start", { stdio: "inherit", cwd: projectPath });

  console.log("Project setup and launch complete!");
};

pandorium().catch(console.error);
