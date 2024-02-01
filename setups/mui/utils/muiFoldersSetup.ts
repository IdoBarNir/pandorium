import { PROJECT_PATH } from "@config";
import { createDirectory, readFileAsync, writeFileAsync } from "@utils";
import { muiFolders } from "./muiFolders";

export const muiFoldersSetup = async () => {
  const updatedTsconfig = await readFileAsync({
    fileName: "tsconfig",
    fileType: "json",
  });

  updatedTsconfig.compilerOptions.paths = { ...muiFolders };

  await writeFileAsync({
    fileName: "tsconfig",
    fileType: "json",
    fileContent: updatedTsconfig,
  });

  await Promise.all(
    Object.values(muiFolders).flatMap((paths) =>
      paths.map((path) =>
        createDirectory({
          directoryPath: `${PROJECT_PATH}/${path.replace("/*", "")}`,
        })
      )
    )
  );
};
