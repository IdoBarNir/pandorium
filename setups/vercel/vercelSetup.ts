import { installLibrary, isLibraryInstalled } from "@utils";
import { vercelLogin, vercelDeploy } from "./utils";

export const vercelSetup = async () => {
  const isVercelCliInstalled = await isLibraryInstalled({
    libraryName: "vercel",
  });

  if (!isVercelCliInstalled) {
    await installLibrary({ libraryName: "vercel" });
  }

  await vercelLogin();
  await vercelDeploy();
};
