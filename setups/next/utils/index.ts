import { loggerDogger } from "@utils";
import { createNextApp as createNextAppRaw } from "./createNextApp";

export const createNextApp = async () =>
  await loggerDogger({
    child: createNextAppRaw,
    childLabel: "Create Next App",
    onlyTryCatch: true,
  });
