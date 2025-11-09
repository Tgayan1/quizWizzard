import { createClient } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY } from "$env/static/public";

const URL = PUBLIC_SUPABASE_URL;
const KEY = PUBLIC_SUPABASE_KEY;

export const supabase = createClient(URL,KEY);
