import { loggerDogger } from "@utils";

import { expressSetup as expressSetupRaw } from "./expressSetup";

export const expressSetup = async () =>
  await loggerDogger({
    child: expressSetupRaw,
    childLabel: "Express.js Setup",
  });
