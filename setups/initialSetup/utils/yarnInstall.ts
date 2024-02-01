import { installLibrary, isLibraryInstalled } from "@utils";

export const yarnInstall = async () => {
  const yarnInstalled = await isLibraryInstalled({ libraryName: "yarn" });

  if (!yarnInstalled) {
    await installLibrary({ libraryName: "yarn" });
  }
};
