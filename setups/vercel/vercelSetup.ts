import { isLibraryInstalled } from "@utils";
import { installVercelCli, vercelLogin, vercelDeploy } from "./utils";

export const vercelSetup = async () => {
  console.log("\nsetting up Vercel...\n");

  try {
    const isVercelCliInstalled = await isLibraryInstalled({
      libraryName: "vercel",
    });

    if (!isVercelCliInstalled) {
      await installVercelCli();
    }
    await vercelLogin();
    await vercelDeploy();

    console.log("\nVercel was setup successfully!\n");
  } catch (error) {
    throw new Error(`\nVercel setup failed: ${error.message}\n`);
  }
};
