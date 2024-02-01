import { loggerDogger } from "@utils";
import nextPrompts from "./nextPrompts.json";
import { handleNextOutput as handleNextOutputRaw } from "./handleNextOutput";
import { createNextApp as createNextAppRaw } from "./createNextApp";

export const handleNextOutput = async ({ data, childProcess }) =>
  await loggerDogger({
    child: handleNextOutputRaw,
    childLabel: "Next Creation Prompts",
    args: { data, childProcess },
    onlyTryCatch: true,
  });

export const createNextApp = async () =>
  await loggerDogger({
    child: createNextAppRaw,
    childLabel: "Create Next App",
    onlyTryCatch: true,
  });

export { nextPrompts };
