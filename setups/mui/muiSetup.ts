import { muiFoldersSetup, muiInstall } from "./utils";

export const muiSetup = async () => {
  await muiInstall();

  await muiFoldersSetup();
};
