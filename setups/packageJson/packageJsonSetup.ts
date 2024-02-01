import { readFileAsync, writeFileAsync } from "@utils";

export const packageJsonSetup = async () => {
  const updatedPackageJson = await readFileAsync({
    fileName: "package",
    fileType: "json",
  });

  updatedPackageJson.license = "MIT";

  await writeFileAsync({
    fileName: "package",
    fileType: "json",
    fileContent: updatedPackageJson,
  });
};
