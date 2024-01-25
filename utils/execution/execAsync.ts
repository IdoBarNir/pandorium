import { ExecOptions, exec } from "child_process";

type ExecAsyncOptions = ExecOptions & {
  stdio?:
    | "pipe"
    | "ignore"
    | "inherit"
    | "ipc"
    | (number | null | undefined | "pipe" | "ipc" | "ignore" | "inherit")[];
};

export const execAsync = ({
  command,
  options,
}: {
  command: string;
  options?: ExecAsyncOptions;
}) => {
  try {
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
  } catch (error) {
    throw new Error(`command execution failed: ${error.message}`);
  }
};
