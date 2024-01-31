import { promises } from "fs";

export const createDirectory = async ({
  directoryPath,
}: {
  directoryPath: string;
}) => {
  await promises.mkdir(directoryPath, { recursive: true });
};
