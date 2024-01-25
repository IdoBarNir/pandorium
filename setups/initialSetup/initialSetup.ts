import { PROJECT_PATH } from "@config";
import { createDirectory, installLibrary, isLibraryInstalled } from "@utils";

export const initialSetup = async () => {
  console.log("\nsetting up initial setup...\n");

  try {
    createDirectory({ directoryPath: PROJECT_PATH });

    if (!isLibraryInstalled({ libraryName: "yarn" })) {
      await installLibrary({ libraryName: "yarn" });
    }
    console.log("\ninitial setup was setup successfully!\n");
  } catch (error) {
    throw new Error(`\ninitial setup failed: ${error.message}\n`);
  }
};
