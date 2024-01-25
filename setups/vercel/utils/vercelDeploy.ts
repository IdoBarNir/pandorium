import { PROJECT_PATH } from "@config";
import { execAsync } from "@utils";

export const vercelDeploy = async () => {
  console.log("\ndeploying to Vercel...\n");

  try {
    await execAsync({
      command: `cd ${PROJECT_PATH} && ../pandorium/setups/vercel/utils/vercel_deploy.exp`,
      options: { stdio: "inherit" },
    });

    console.log("\ndeploying to Vercel completed successfully!\n");
  } catch (error) {
    throw new Error(`\ndeploying to Vercel failed: ${error.message}\n`);
  }
};
