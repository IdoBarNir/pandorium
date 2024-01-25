import { PROJECT_PATH } from "@config";
import { execAsync } from "@utils";

import { muiFoldersSetup } from "./utils";

export const muiSetup = async (): Promise<void> => {
  try {
    console.log("\nsetting up MUI...\n");

    await execAsync({
      command: `cd ${PROJECT_PATH} && yarn add @mui/material @emotion/react @emotion/styled`,
      options: { stdio: "inherit" },
    });

    await muiFoldersSetup();

    console.log("\nMUI was setup successfully!\n");
  } catch (error) {
    throw new Error(`\nMUI setup failed: ${error.message}\n`);
  }
};
