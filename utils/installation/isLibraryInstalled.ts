import { execAsync } from "..";

export const isLibraryInstalled = async ({
  libraryName,
}: {
  libraryName: string;
}) => {
  try {
    await execAsync({ command: `${libraryName} --version` });

    return true;
  } catch (error) {
    return false;
  }
};
