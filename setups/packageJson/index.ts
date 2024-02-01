import { loggerDogger } from "@utils";
import { packageJsonSetup as packageJsonSetupRaw } from "./packageJsonSetup";

export const packageJsonSetup = async () =>
  await loggerDogger({
    child: packageJsonSetupRaw,
    childLabel: "package.json Setup",
    onlyTryCatch: true,
  });
