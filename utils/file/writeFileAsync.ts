import { writeFile } from "fs/promises";
import path from "path";

import { PROJECT_PATH } from "@config";
import { checkDirectoryExists } from "./checkDirectoryExists";

export const writeFileAsync = async ({ fileName, fileType, fileContent }) => {
  if (await checkDirectoryExists({ directoryPath: PROJECT_PATH })) {
    const resolvedPath = path.resolve(
      process.cwd(),
      PROJECT_PATH,
      `${fileName}.${fileType}`
    );

    if (fileType === "json") {
      await writeFile(resolvedPath, JSON.stringify(fileContent, null, 2));
    } else {
      await writeFile(resolvedPath, fileContent);
    }
  }
};
