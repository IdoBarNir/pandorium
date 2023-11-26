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

      for (const prompt in nextPrompts) {
        if (output.includes(prompt)) {
          const response = nextPrompts[prompt];
          child.stdin.write(response);
          break;
        }
      }
    });

    child.stderr.on("data", (data) => {
      console.error(data.toString());
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`setupNext exited with code ${code}`));
      }
    });
  });
};

export default setupNext;
