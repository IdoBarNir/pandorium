import fs from "fs";
import { exec, ExecOptions } from "child_process";

type ExecAsyncOptions = ExecOptions & {
  stdio?:
    | "pipe"
    | "ignore"
    | "inherit"
    | "ipc"
    | (number | null | undefined | "pipe" | "ipc" | "ignore" | "inherit")[];
};

export const execAsync = (command: string, options: ExecAsyncOptions = {}) => {
  return new Promise<{ stdout: string; stderr: string }>((resolve, reject) => {
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
  });
};

export const createDirectory = async ({ projectPath }) => {
  if (!fs.existsSync(projectPath)) {
    await fs.promises.mkdir(projectPath, { recursive: true });
  }
};

export const isYarnInstalled = async () => {
  try {
    await execAsync("yarn --version");
    return true;
  } catch (error) {
    return false;
  }
};

export const installYarn = async () => {
  console.log("Installing Yarn...");
  await execAsync("npm install --global yarn", { stdio: "inherit" });
};

export const readConfig = ({ configPath }) => {
  try {
    const configFile = fs.readFileSync(configPath, "utf8");
    return JSON.parse(configFile);
  } catch (error) {
    throw new Error(`Failed to read configuration file: ${error.message}`);
  }
};

export const readAndValidateConfig = ({ configPath }) => {
  const config = readConfig({ configPath });

  const requiredFields = ["projectName", "supabaseUrl", "supabaseAnonKey"];
  const missingFields = requiredFields.filter((field) => !(field in config));

  if (missingFields.length > 0) {
    throw new Error(
      `Missing required config fields: ${missingFields.join(", ")}`
    );
  }

  return config;
};
