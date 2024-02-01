import { loggerDogger } from "@utils";
import { supabaseInstall as supabaseInstallRaw } from "./supabaseInstall";

export const supabaseInstall = async () =>
  await loggerDogger({
    child: supabaseInstallRaw,
    childLabel: "Supabase Installation",
    onlyTryCatch: true,
  });
