import { readFileAsync, writeFileAsync } from "@utils";
import { expressInstall } from "./utils";

export const expressSetup = async () => {
  await expressInstall();

  const serverContent = await readFileAsync({
    fileName: "serverContent",
    fileType: "ts",
    local: true,
  });

  await writeFileAsync({
    fileName: "server",
    fileType: "ts",
    fileContent: serverContent,
  });
};
