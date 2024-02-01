import { loggerDogger } from "@utils";
import supabaseConfig from "./supabaseConfig.json";
import { supabaseInstall as supabaseInstallRaw } from "./supabaseInstall";

export const supabaseInstall = async () =>
  await loggerDogger({
    child: supabaseInstallRaw,
    childLabel: "Supabase Installation",
    onlyTryCatch: true,
  });

export { supabaseConfig };
