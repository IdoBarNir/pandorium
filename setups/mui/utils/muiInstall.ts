import { PROJECT_PATH } from "@config";
import { execAsync } from "@utils";

export const muiInstall = async () =>
  await execAsync({
    command: `cd ${PROJECT_PATH} && yarn add @mui/material @emotion/react @emotion/styled`,
    options: { stdio: "inherit" },
  });
