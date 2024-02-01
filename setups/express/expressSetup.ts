import { writeFile } from "fs/promises";

import { PROJECT_PATH } from "@config";
import { expressInstall } from "./utils";
import { serverContent } from "./heirloom";

export const expressSetup = async () => {
  await expressInstall();

  await writeFile(`${PROJECT_PATH}/server.ts`, serverContent);
};
