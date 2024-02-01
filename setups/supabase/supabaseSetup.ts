import { supabaseInstall } from "./utils";
import { readFileAsync, writeFileAsync } from "@utils";

export const supabaseSetup = async () => {
  await supabaseInstall();

  const envContent = await readFileAsync({
    fileName: ".env",
    local: true,
  });

  const supabaseConfigContent = await readFileAsync({
    fileName: "supabaseConfig",
    fileType: "ts",
    local: true,
  });

  await writeFileAsync({
    fileName: "",
    fileType: "env",
    fileContent: envContent,
  });
  await writeFileAsync({
    fileName: "supabaseConfig",
    fileType: "ts",
    fileContent: supabaseConfigContent,
  });
};
