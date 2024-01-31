import { PROJECT_PATH } from "@config";
import { execAsync } from "@utils";

import { muiFoldersSetup } from "./utils";

export const muiSetup = async (): Promise<void> => {
  await execAsync({
    command: `cd ${PROJECT_PATH} && yarn add @mui/material @emotion/react @emotion/styled`,
    options: { stdio: "inherit" },
  });

  await muiFoldersSetup();
};
