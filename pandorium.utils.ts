import { execSync } from "child_process";
import fs from "fs";

export const createDirectory = ({
  projectPath,
}: {
  projectPath: string;
}): void => {
  if (!fs.existsSync(projectPath)) {
    fs.mkdirSync(projectPath, { recursive: true });
  }
};

export const isYarnInstalled = () => {
  try {
    execSync("yarn --version", { stdio: "ignore" });
    return true;
  } catch (error) {
    return false;
  }
};

export const installYarn = () => {
  console.log("Installing Yarn...");
  execSync("npm install --global yarn", { stdio: "inherit" });
};

export const readConfig = ({ configPath }: { configPath: string }) => {
  try {
    const configFile = fs.readFileSync(configPath, "utf8");
    return JSON.parse(configFile);
  } catch (error) {
    throw new Error(`Failed to read configuration file: ${error.message}`);
  }
};
