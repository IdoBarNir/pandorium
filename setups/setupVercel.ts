import { execSync } from "child_process";

const setupVercel = async ({ projectPath }: { projectPath: string }) => {
  const isVercelCliInstalled = (): boolean => {
    try {
      execSync("vercel --version", { stdio: "ignore" });
      return true;
    } catch (error) {
      return false;
    }
  };

  const installVercelCli = (): void => {
    console.log("Installing Vercel CLI...");
    execSync("yarn global add vercel", { stdio: "inherit" });
  };

  const vercelLogin = (): void => {
    console.log("Please log in to your Vercel account...");
    execSync("vercel login", { stdio: "inherit" });
  };

  const initializeVercelProject = ({
    projectPath,
  }: {
    projectPath: string;
  }): void => {
    console.log("Initializing Vercel project...");
    execSync(`cd ${projectPath} && vercel`, { stdio: "inherit" });
  };

  if (!isVercelCliInstalled()) {
    installVercelCli();
  }

  vercelLogin();
  initializeVercelProject({ projectPath });

  console.log("Vercel setup complete!");
};

export default setupVercel;
