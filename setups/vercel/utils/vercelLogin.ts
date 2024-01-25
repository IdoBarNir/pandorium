import { PROJECT_NAME, PROJECT_PATH } from "@config";
import { execAsync } from "@utils";

export const vercelLogin = async () => {
  console.log("\nPlease log in to your Vercel account...\n");

  try {
    await execAsync({
      command: `cd ${PROJECT_PATH}`,
      options: { stdio: "inherit" },
    });
    await execAsync({
      command: `./setups/vercel/utils/vercel_login.exp`,
      options: { stdio: "inherit" },
    });

    console.log("\nLogin to Vercel completed successfully!\n");
  } catch (error) {
    throw new Error(`\nLogin to Vercel failed: ${error.message}\n`);
  }
};
