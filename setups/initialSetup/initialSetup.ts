import { PROJECT_PATH } from "@config";
import { createDirectory, installLibrary, isLibraryInstalled } from "@utils";

export const initialSetup = async () => {
  createDirectory({ directoryPath: PROJECT_PATH });

  const yarnInstalled = await isLibraryInstalled({ libraryName: "yarn" });

  console.log(yarnInstalled);

  if (!yarnInstalled) {
    await installLibrary({ libraryName: "yarn" });
  }
};
