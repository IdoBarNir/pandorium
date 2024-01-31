import { loggerDogger } from "@utils";

import { supabaseSetup as supabaseSetupRaw } from "./supabaseSetup";

export const supabaseSetup = async () =>
  await loggerDogger({
    child: supabaseSetupRaw,
    childLabel: "Supabase Setup",
  });
