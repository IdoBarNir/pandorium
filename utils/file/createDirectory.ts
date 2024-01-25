import { promises } from "fs";

export const createDirectory = async ({
  directoryPath,
}: {
  directoryPath: string;
}) => {
  try {
    await promises.mkdir(directoryPath, { recursive: true });
  } catch (error) {
    throw new Error(
      `Error creating directory at ${directoryPath}: ${error.message}`
    );
  }
};
