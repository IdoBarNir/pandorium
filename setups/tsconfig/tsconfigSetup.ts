import { readFileAsync, writeFileAsync } from "@utils";

export const tsconfigSetup = async () => {
  const updatedTsconfig = await readFileAsync({
    fileName: "tsconfig",
    fileType: "json",
  });

  updatedTsconfig.compilerOptions = updatedTsconfig.compilerOptions || {};

  await writeFileAsync({
    fileName: "tsconfig",
    fileType: "json",
    fileContent: updatedTsconfig,
  });
};
