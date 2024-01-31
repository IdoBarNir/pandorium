import { loggerDogger } from "@utils";

import { initialSetup as initialSetupRaw } from "./initialSetup";

export const initialSetup = async () =>
  await loggerDogger({
    child: initialSetupRaw,
    childLabel: "Initial Setup",
  });
