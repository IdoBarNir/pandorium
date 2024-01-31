import { loggerDogger } from "@utils";

import { muiFoldersSetup as muiFoldersSetupRaw } from "./muiFoldersSetup";

export const muiFoldersSetup = async () =>
  await loggerDogger({
    child: muiFoldersSetupRaw,
    childLabel: "MUI Folder Setup",
  });
