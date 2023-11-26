import { execSync } from "child_process";

import { setupMuiFolders } from "./setupMui.utils.js";

const setupMui = async ({ projectPath }: { projectPath: string }) => {
  execSync(
    `cd ${projectPath} && yarn add @mui/material @emotion/react @emotion/styled`,
    { stdio: "inherit" }
  );

  setupMuiFolders({ projectPath });
};

export default setupMui;
