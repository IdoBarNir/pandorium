import { loggerDogger } from "@utils";
import { muiFoldersSetup as muiFoldersSetupRaw } from "./muiFoldersSetup";
import { muiInstall as muiInstallRaw } from "./muiInstall";

export const muiFoldersSetup = async () =>
  await loggerDogger({
    child: muiFoldersSetupRaw,
    childLabel: "MUI Folder Setup",
    onlyTryCatch: true,
  });

export const muiInstall = async () =>
  await loggerDogger({
    child: muiInstallRaw,
    childLabel: "MUI Installation",
    onlyTryCatch: true,
  });
