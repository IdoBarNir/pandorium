import { installLibrary, isLibraryInstalled } from "@utils";

export const vercelInstall = async () => {
  const isVercelCliInstalled = await isLibraryInstalled({
    libraryName: "vercel",
  });

  if (!isVercelCliInstalled) {
    await installLibrary({ libraryName: "vercel" });
  }
};
