import { execSync } from "child_process";
import fs from "fs";

export const createDirectory = (targetPath: string): void => {
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
  }
};

export const isYarnInstalled = () => {
  try {
    execSync("yarn --version", { stdio: "ignore" });
    return true;
  } catch (e) {
    return false;
  }
};

export const installYarn = () => {
  console.log("Installing Yarn...");
  execSync("npm install --global yarn", { stdio: "inherit" });
};
