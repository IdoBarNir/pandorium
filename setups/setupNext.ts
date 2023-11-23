import { execSync } from "child_process";

const setupNext = async (projectPath: string) => {
  execSync(`yarn create next-app --typescript ${projectPath}`, {
    stdio: "inherit",
  });
};

export default setupNext;
