import {
  expressSetup,
  initialSetup,
  muiSetup,
  nextSetup,
  supabaseSetup,
  vercelSetup,
} from "@setups";
import { execAsync } from "@/utils";
import { PROJECT_NAME, PROJECT_PATH } from "@/config";

const pandorium = async () => {
  console.log(`\nsetting up ${PROJECT_NAME}...\n`);
  await initialSetup();
  await nextSetup();
  await muiSetup();
  await expressSetup();
  await supabaseSetup();

  console.log(`\nbuilding ${PROJECT_NAME}...\n`);
  await execAsync({
    command: `cd ${PROJECT_PATH} && yarn build`,
    options: { stdio: "inherit" },
  });

  await vercelSetup();

  console.log(`\nstarting ${PROJECT_NAME}...\n`);
  await execAsync({
    command: `cd ${PROJECT_PATH} && ../pandorium/utils/execution/start_project.exp`,
    options: { stdio: "inherit" },
  });
};

pandorium().catch((error) => {
  console.error(`\n${PROJECT_NAME} setup failed: ${error.message}\n`);
});
