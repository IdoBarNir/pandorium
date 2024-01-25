import { execAsync } from "..";

export const installLibrary = async ({
  libraryName,
}: {
  libraryName: string;
}) => {
  console.log(`\nInstalling ${libraryName}...\n`);
  const packageManager = libraryName === "yarn" ? "npm" : "yarn";

  try {
    const installCommand = `${packageManager} ${
      packageManager === "npm" ? "install -g" : "add global"
    } ${libraryName}`;
    await execAsync({
      command: installCommand,
      options: { stdio: "inherit" },
    });
  } catch (error) {
    throw new Error(`\n${libraryName} installation failed: ${error.message}\n`);
  }
};
