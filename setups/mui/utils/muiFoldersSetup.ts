import { PROJECT_PATH } from "@config";
import { createDirectory, getTsconfigContent, updateTsconfig } from "@utils";
import { muiFolders } from "./muiFolders";

export const muiFoldersSetup = async () => {
  const updatedTsconfig = await getTsconfigContent();

  updatedTsconfig.compilerOptions.paths = { ...muiFolders };

  await updateTsconfig({ updatedTsconfig });

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
