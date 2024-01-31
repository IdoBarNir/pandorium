import { loggerDogger } from "@utils";

import { muiSetup as muiSetupRaw } from "./muiSetup";

export const muiSetup = async () =>
  await loggerDogger({
    child: muiSetupRaw,
    childLabel: "MUI Setup",
  });
