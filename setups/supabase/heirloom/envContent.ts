import { supabaseConfig } from "../utils";

export const envContent = `SUPABASE_URL=${supabaseConfig.url}
SUPABASE_ANON_KEY=${supabaseConfig.anonKey}
`;
