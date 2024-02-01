import { readFile } from "fs/promises";
import path from "path";

import { PROJECT_PATH } from "@config";
import { checkDirectoryExists } from "./checkDirectoryExists";
import { jsonType } from "@types";

export const readFileAsync = async ({ fileName, fileType }) => {
  if (await checkDirectoryExists({ directoryPath: PROJECT_PATH })) {
    const resolvedPath = path.resolve(
      process.cwd(),
      PROJECT_PATH,
      `${fileName}.${fileType}`
    );
    const fileContent = await readFile(resolvedPath, "utf8");

    if (fileType === "json") {
      const jsonContent: jsonType = JSON.parse(fileContent);
      return jsonContent;
    }

    return fileContent;
  }
};
