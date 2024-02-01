import { readFile, writeFile } from "fs/promises";
import path from "path";

import { PROJECT_PATH } from "@config";
import { checkDirectoryExists } from "@utils";

const pathToTsconfig = path.resolve(process.cwd(), PROJECT_PATH);
const tsconfigPath = path.join(pathToTsconfig, "tsconfig.json");

export const getTsconfigContent = async () => {
  if (await checkDirectoryExists({ directoryPath: PROJECT_PATH })) {
    const content = await readFile(tsconfigPath, "utf8");
    return JSON.parse(content);
  }
};

export const updateTsconfig = async ({ updatedTsconfig }) => {
  if (await checkDirectoryExists({ directoryPath: PROJECT_PATH })) {
    await writeFile(tsconfigPath, JSON.stringify(updatedTsconfig, null, 2));
  }
};
