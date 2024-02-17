import { loggerDogger } from "@utils";
import { supabaseInstall as supabaseInstallRaw } from "./supabaseInstall";
import { createUsersTable as createUsersTableRaw } from "./createUsersTable";

export const createUsersTable = async () =>
  await loggerDogger({
    child: createUsersTableRaw,
    childLabel: "Users Table Creation",
    onlyTryCatch: true,
  });

export const supabaseInstall = async () =>
  await loggerDogger({
    child: supabaseInstallRaw,
    childLabel: "Supabase Installation",
    onlyTryCatch: true,
  });
