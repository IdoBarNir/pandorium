import { PROJECT_PATH } from "@config";
import { execAsync } from "@utils";

export const vercelDeploy = async () =>
  await execAsync({
    command: `cd ${PROJECT_PATH} && ../pandorium/setups/vercel/utils/vercel_deploy.exp`,
    options: { stdio: "inherit" },
  });
