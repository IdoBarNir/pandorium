import { execSync } from "child_process";

const setupMui = async (projectPath: string) => {
  execSync(
    `cd ${projectPath} && yarn add @mui/material @emotion/react @emotion/styled`,
    { stdio: "inherit" }
  );
};

export default setupMui;
