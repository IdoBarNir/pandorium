import { loggerDogger } from "@utils";

import { createDirectory as createDirectoryRaw } from "./createDirectory";
import { readJsonFile as readJsonFileRaw } from "./readJsonFile";
import { readValidatedJsonFile as readValidatedJsonFileRaw } from "./readValidatedJsonFile";

export const createDirectory = async ({ directoryPath }) =>
  await loggerDogger({
    child: createDirectoryRaw,
    childLabel: "Directory Creation",
    args: { directoryPath },
    onlyTryCatch: true,
  });

export const readJsonFile = async ({ jsonFilePath }) =>
  await loggerDogger({
    child: readJsonFileRaw,
    childLabel: "Reading Json File",
    args: { jsonFilePath },
    onlyTryCatch: true,
  });

export const readValidatedJsonFile = async ({ jsonFilePath }) =>
  await loggerDogger({
    child: readValidatedJsonFileRaw,
    childLabel: "Reading Validated Json",
    args: { jsonFilePath },
    onlyTryCatch: true,
  });

export { validateJson } from "./validateJson";
