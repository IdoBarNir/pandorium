import { readFileAsync, writeFileAsync } from "@utils";
import { createUsersTable, supabaseInstall } from "./utils";

export const supabaseSetup = async () => {
  await supabaseInstall();

  const envContent = await readFileAsync({
    fileName: ".env",
    local: true,
  });

  await writeFileAsync({
    fileName: "",
    fileType: "env",
    fileContent: envContent,
  });

  const supabaseConfigContent = await readFileAsync({
    fileName: "supabaseConfig",
    fileType: "ts",
    local: true,
  });

  await writeFileAsync({
    fileName: "supabaseConfig",
    fileType: "ts",
    fileContent: supabaseConfigContent,
  });

  await createUsersTable();
};
