import { loggerDogger } from "@utils";

import { createDirectory as createDirectoryRaw } from "./createDirectory";

export const createDirectory = async ({ directoryPath }) =>
  await loggerDogger({
    child: createDirectoryRaw,
    childLabel: "Directory Creation",
    args: { directoryPath },
    onlyTryCatch: true,
  });

export { checkDirectoryExists } from "./checkDirectoryExists";
