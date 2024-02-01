import { loggerDogger } from "@utils";
import { expressInstall as expressInstallRaw } from "./expressInstall";

export const expressInstall = async () =>
  await loggerDogger({
    child: expressInstallRaw,
    childLabel: "Express.js Installation",
    onlyTryCatch: true,
  });
