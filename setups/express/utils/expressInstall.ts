import { PROJECT_PATH } from "@config";
import { execAsync } from "@utils";

export const expressInstall = async () =>
  await execAsync({
    command: `cd ${PROJECT_PATH} && yarn add express @types/express `,
    options: {
      stdio: "inherit",
    },
  });
