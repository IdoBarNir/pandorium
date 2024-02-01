import { readFile } from "fs/promises";
import path from "path";

import { PROJECT_PATH } from "@config";
import { checkDirectoryExists } from "./checkDirectoryExists";
import { jsonType } from "@types";

export const readFileAsync = async ({
  fileName,
  fileType,
  local,
}: {
  fileName: string;
  fileType?: string;
  local?: boolean;
}) => {
  if (
    !local &&
    !(await checkDirectoryExists({
      directoryPath: `${PROJECT_PATH}/${fileName}.${fileType}`,
    }))
  ) {
    return;
  }

  const appendedFile = fileType ? `${fileName}.${fileType}` : `${fileName}`;

  const resolvedPath = local
    ? path.resolve(process.cwd(), `dist/heirloom/${appendedFile}`)
    : path.resolve(process.cwd(), PROJECT_PATH, `${appendedFile}`);

  const fileContent = await readFile(resolvedPath, "utf8");

  if (fileType === "json") {
    const jsonContent: jsonType = JSON.parse(fileContent);
    return jsonContent;
  }

  return fileContent;
};
