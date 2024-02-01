import { nextPrompts } from ".";

export const handleNextOutput = async ({ data, childProcess }) => {
  const output = data.toString();

  Object.entries(nextPrompts).forEach(([prompt, response]) => {
    if (output.includes(prompt)) {
      childProcess.stdin.write(response);
    }
  });
};
