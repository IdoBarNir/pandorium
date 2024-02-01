import { loggerDogger } from "@utils";
import { yarnInstall as yarnInstallRaw } from "./yarnInstall";

export const yarnInstall = async () =>
  await loggerDogger({
    child: yarnInstallRaw,
    childLabel: "Yarn Installation",
    onlyTryCatch: true,
  });
