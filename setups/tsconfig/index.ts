import { loggerDogger } from "@utils";
import { tsconfigSetup as tsconfigSetupRaw } from "./tsconfigSetup";

export const tsconfigSetup = async () =>
  await loggerDogger({
    child: tsconfigSetupRaw,
    childLabel: "tsconfig.json Setup",
    onlyTryCatch: true,
  });
