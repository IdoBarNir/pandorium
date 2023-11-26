import fs from "fs";

const muiFolders = {
  "@app/*": ["./src/app/app/*"],
  "@components/*": ["./src/app/components/*"],
  "@pages/*": ["./src/app/pages/*"],
  "@hooks/*": ["./src/app/hooks/*"],
  "@layouts/*": ["./src/app/layouts/*"],
  "@styles/*": ["./src/app/styles/*"],
  "@theme/*": ["./src/app/theme/*"],
};

export const setupMuiFolders = ({ projectPath }) => {
  const tsConfigPath = `${projectPath}/tsconfig.json`;

  try {
    // Update tsconfig.json
    const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, "utf8"));
    tsConfig.compilerOptions = tsConfig.compilerOptions || {};
    tsConfig.compilerOptions.paths = {
      ...muiFolders,
    };
    fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));

    Object.values(muiFolders).forEach((pathArray) => {
      pathArray.forEach((path) => {
        const fullPath = `${projectPath}/${path.replace("/*", "")}`;
        if (!fs.existsSync(fullPath)) {
          fs.mkdirSync(fullPath, { recursive: true });
        }
      });
    });
  } catch (error) {
    throw new Error(
      `Failed to update tsconfig.json and create directories: ${error.message}`
    );
  }
};
