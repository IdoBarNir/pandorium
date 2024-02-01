import { getTsconfigContent, updateTsconfig } from "./tsconfigUtils";

export const tsconfigSetup = async () => {
  const updatedTsconfig = await getTsconfigContent();

  updatedTsconfig.compilerOptions = updatedTsconfig.compilerOptions || {};

  updateTsconfig({ updatedTsconfig });
};
