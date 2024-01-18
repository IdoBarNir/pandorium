import {
  setupExpress,
  setupMui,
  setupNext,
  setupSupabase,
  setupVercel,
} from "@setups/index.js";
import {
  createDirectory,
  execAsync,
  installYarn,
  isYarnInstalled,
  readAndValidateConfig,
} from "./pandorium.utils.js";

const pandorium = async () => {
  const config = await readAndValidateConfig({
    configPath: "./pandoriumConfig.json",
  });
  const projectPath = `../${config.projectName}`;

  createDirectory({ projectPath });

  if (!isYarnInstalled()) {
    await installYarn();
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

  console.log(`building ${config.projectName}...`);
  await execAsync("yarn build", { cwd: projectPath });

  console.log(`starting ${config.projectName}...`);
  await execAsync("yarn start", { cwd: projectPath });

  console.log(`${config.projectName} setup and launch complete!`);
};

pandorium().catch((error) => {
  console.error(`Error during project setup: ${error.message}`);
});
