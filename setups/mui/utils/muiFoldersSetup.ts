import { readFile, writeFile } from "fs/promises";

import { PROJECT_PATH } from "@config";
import { createDirectory } from "@utils";
import { muiFolders } from "./muiFolders";

export const muiFoldersSetup = async (): Promise<void> => {
  const tsConfigPath = `${PROJECT_PATH}/tsconfig.json`;

  try {
    const tsConfig = JSON.parse(await readFile(tsConfigPath, "utf8"));
    tsConfig.compilerOptions = tsConfig.compilerOptions || {};
    tsConfig.compilerOptions.paths = { ...muiFolders };
    await writeFile(tsConfigPath, JSON.stringify(tsConfig, null, 2));

    await Promise.all(
      Object.values(muiFolders).flatMap((paths) =>
        paths.map((path) =>
          createDirectory({
            directoryPath: `${PROJECT_PATH}/${path.replace("/*", "")}`,
          })
        )
      )
    );
  } catch (error) {
    throw new Error(
      `Failed to update tsconfig.json and create directories: ${error.message}`
    );
  }
};
