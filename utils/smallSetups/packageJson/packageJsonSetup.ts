import { readFile, writeFile } from "fs/promises";
import path from "path";
import { PROJECT_PATH } from "@config";
import { jsonType } from "@types";

export const packageJsonSetup = async () => {
  const pathToPackageJson = path.resolve(process.cwd(), PROJECT_PATH);
  const packageJsonPath = path.join(pathToPackageJson, "package.json");

  const packageJsonContent = await readFile(packageJsonPath, "utf8");
  const packageJson: jsonType = JSON.parse(packageJsonContent);

  packageJson.license = "MIT";

  await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
};
