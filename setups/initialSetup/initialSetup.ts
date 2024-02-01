import { PROJECT_PATH } from "@config";
import { createDirectory } from "@utils";
import { yarnInstall } from "./utils";

export const initialSetup = async () => {
  await createDirectory({ directoryPath: PROJECT_PATH });

  await yarnInstall();
};
