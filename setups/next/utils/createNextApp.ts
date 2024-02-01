import { spawn } from "child_process";
import { PROJECT_PATH } from "@config";
import { handleNextOutput } from ".";

export const createNextApp = async () => {
  const childProcess = spawn(
    "yarn",
    ["create", "next-app", "--typescript", PROJECT_PATH],
    { stdio: ["pipe", "pipe", "pipe"] }
  );

  childProcess.stdout.on("data", (data) =>
    handleNextOutput({ data, childProcess })
  );
  childProcess.stderr.on("data", (data) => console.error(data.toString()));

  return new Promise<void>((resolve, reject) => {
    childProcess.on("close", (code) => {
      code === 0
        ? resolve()
        : reject(new Error(`setupNext exited with code ${code}`));
    });
  });
};
