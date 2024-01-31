import { loggerDogger } from "@utils/logging";

import { ExecAsyncOptions } from "@types";

import { execAsync as execAsyncRaw } from "./execAsync";

export const execAsync = async ({
  command,
  options,
}: {
  command: string;
  options?: ExecAsyncOptions;
}) =>
  await loggerDogger({
    child: execAsyncRaw,
    childLabel: "Command Async Execution",
    args: { command, options },
    onlyTryCatch: true,
  });
