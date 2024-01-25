import { execAsync } from "@utils";

export const installVercelCli = async () => {
  console.log("\nInstalling Vercel CLI...\n");
  await execAsync({
    command: "yarn global add vercel",
    options: { stdio: "inherit" },
  });
};
