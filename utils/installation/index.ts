import { loggerDogger } from "@utils";

import { installLibrary as installLibraryRaw } from "./installLibrary";

export const installLibrary = async ({ libraryName }) =>
  await loggerDogger({
    child: installLibraryRaw,
    childLabel: "Install Library",
    args: { libraryName },
    onlyTryCatch: true,
  });

export { isLibraryInstalled } from "./isLibraryInstalled";
