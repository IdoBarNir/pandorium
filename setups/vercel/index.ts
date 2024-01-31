import { loggerDogger } from "@utils";

import { vercelSetup as vercelSetupRaw } from "./vercelSetup";

export const vercelSetup = async () =>
  await loggerDogger({
    child: vercelSetupRaw,
    childLabel: "Vercel Setup",
  });
