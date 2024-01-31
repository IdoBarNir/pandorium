import { execAsync } from "..";

export const installLibrary = async ({
  libraryName,
}: {
  libraryName: string;
}) => {
  const packageManager = libraryName === "yarn" ? "npm" : "yarn";
  const installCommand = `${packageManager} ${
    packageManager === "npm" ? "install" : "add global"
  } ${libraryName}`;

  await execAsync({
    command: installCommand,
    options: { stdio: "inherit" },
  });
};
