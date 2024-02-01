import { yarnInstall } from "./utils";

export const initialSetup = async () => {
  await yarnInstall();
};
