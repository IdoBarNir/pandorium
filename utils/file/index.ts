import { loggerDogger } from "@utils";
import { createDirectory as createDirectoryRaw } from "./createDirectory";
import { readFileAsync as readFileAsyncRaw } from "./readFileAsync";
import { writeFileAsync as writeFileAsyncRaw } from "./writeFileAsync";

export const createDirectory = async ({ directoryPath }) =>
  await loggerDogger({
    child: createDirectoryRaw,
    childLabel: "Directory Creation",
    args: { directoryPath },
    onlyTryCatch: true,
  });

export const readFileAsync = async ({ fileName, fileType }) =>
  await loggerDogger({
    child: readFileAsyncRaw,
    childLabel: "Reading File Async",
    args: { fileName, fileType },
    onlyTryCatch: true,
  });

export const writeFileAsync = async ({ fileName, fileType, fileContent }) =>
  await loggerDogger({
    child: writeFileAsyncRaw,
    childLabel: "Writing File Async",
    args: { fileName, fileType, fileContent },
    onlyTryCatch: true,
  });

export { checkDirectoryExists } from "./checkDirectoryExists";
