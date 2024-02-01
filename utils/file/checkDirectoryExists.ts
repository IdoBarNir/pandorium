import { access } from "fs/promises";
import { constants } from "fs";

export const checkDirectoryExists = async ({
  directoryPath,
}: {
  directoryPath: string;
}) => {
  try {
    await access(directoryPath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};
