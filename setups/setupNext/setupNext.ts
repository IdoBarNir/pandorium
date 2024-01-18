import { promises as fs } from "fs";
import { spawn } from "child_process";

import nextPrompts from "./nextPrompts.json" assert { type: "json" };

const setupNext = async ({
  projectPath,
}: {
  projectPath: string;
}): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const child = spawn(
      "yarn",
      ["create", "next-app", "--typescript", projectPath],
      {
        stdio: ["pipe", "pipe", "pipe"],
      }
    );

    child.stdout.on("data", (data) => {
      const output = data.toString();
      console.log(output);
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

      try {
        const packageJsonPath = `${projectPath}/package.json`;
        const packageJson = JSON.parse(
          await fs.readFile(packageJsonPath, "utf8")
        );
        packageJson.license = "MIT";
        await fs.writeFile(
          packageJsonPath,
          JSON.stringify(packageJson, null, 2)
        );
        resolve();
      } catch (error) {
        reject(
          new Error(
            `Failed to add MIT license to package.json: ${error.message}`
          )
        );
      }
    });
  });
};

export default setupNext;
