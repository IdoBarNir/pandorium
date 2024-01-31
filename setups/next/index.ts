import { loggerDogger } from "@utils";

import { nextSetup as nextSetupRaw } from "./nextSetup";

export const nextSetup = async () =>
  await loggerDogger({
    child: nextSetupRaw,
    childLabel: "MUI Setup",
  });
