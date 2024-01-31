import { ExecAsyncOptions } from "@types";

import { exec } from "child_process";

export const execAsync = ({
  command,
  options,
}: {
  command: string;
  options?: ExecAsyncOptions;
}) => {
  const executionPromise = new Promise<{ stdout: string; stderr: string }>(
    (resolve, reject) => {
      const childProcess = exec(command, options, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve({ stdout, stderr });
        }
      });

      if (options.stdio === "inherit") {
        if (childProcess.stdout) childProcess.stdout.pipe(process.stdout);
        if (childProcess.stderr) childProcess.stderr.pipe(process.stderr);
      }
    }
  );

  return executionPromise;
};
