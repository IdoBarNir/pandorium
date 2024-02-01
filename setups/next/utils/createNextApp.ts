import { execAsync } from "@utils";
import { PROJECT_NAME } from "@config";

export const createNextApp = async () => {
  await execAsync({
    command: `cd .. && pandorium/setups/next/utils/create_next_app.exp ${PROJECT_NAME}`,
    options: { stdio: "inherit" },
  });
};
