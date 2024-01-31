import { PROJECT_PATH } from "@config";
import { execAsync } from "@utils";

export const vercelLogin = async () => {
  await execAsync({
    command: `cd ${PROJECT_PATH}`,
    options: { stdio: "inherit" },
  });
  await execAsync({
    command: `./setups/vercel/utils/vercel_login.exp`,
    options: { stdio: "inherit" },
  });
};
