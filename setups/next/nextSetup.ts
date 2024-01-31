import { spawn } from "child_process";
import { readFile, writeFile } from "fs/promises";

import { PROJECT_PATH } from "@config";
import { nextPrompts } from "./utils";

export const nextSetup = async (): Promise<void> =>
  new Promise<void>((resolve, reject) => {
    const child = spawn(
      "yarn",
      ["create", "next-app", "--typescript", PROJECT_PATH],
      {
        stdio: ["pipe", "pipe", "pipe"],
      }
    );

    child.stdout.on("data", (data) => {
      const output = data.toString();
      Object.entries(nextPrompts).forEach(([prompt, response]) => {
        if (output.includes(prompt)) {
          child.stdin.write(response);
        }
      });
    });

    child.stderr.on("data", (data) => console.error(data.toString()));

    child.on("close", async (code) => {
      if (code !== 0) {
        return reject(new Error(`setupNext exited with code ${code}`));
      }

      const packageJsonPath = `${PROJECT_PATH}/package.json`;
      const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));
      packageJson.license = "MIT";
      await writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
      resolve();
    });
  });
