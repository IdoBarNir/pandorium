import { promises as fs, existsSync } from "fs";

const muiFolders = {
  "@app/*": ["./src/app/app/*"],
  "@components/*": ["./src/app/components/*"],
  "@pages/*": ["./src/app/pages/*"],
  "@hooks/*": ["./src/app/hooks/*"],
  "@layouts/*": ["./src/app/layouts/*"],
  "@styles/*": ["./src/app/styles/*"],
  "@theme/*": ["./src/app/theme/*"],
};

export const setupMuiFolders = async ({
  projectPath,
}: {
  projectPath: string;
}): Promise<void> => {
  const tsConfigPath = `${projectPath}/tsconfig.json`;

  try {
    const tsConfig = JSON.parse(await fs.readFile(tsConfigPath, "utf8"));
    tsConfig.compilerOptions = tsConfig.compilerOptions || {};
    tsConfig.compilerOptions.paths = { ...muiFolders };
    await fs.writeFile(tsConfigPath, JSON.stringify(tsConfig, null, 2));

    await Promise.all(
      Object.values(muiFolders).flatMap((paths) =>
        paths.map((path) =>
          createDirectory(`${projectPath}/${path.replace("/*", "")}`)
        )
      )
    );
  } catch (error) {
    throw new Error(
      `Failed to update tsconfig.json and create directories: ${error.message}`
    );
  }
};

const createDirectory = async (path: string): Promise<void> => {
  if (!existsSync(path)) {
    await fs.mkdir(path, { recursive: true });
  }
};
