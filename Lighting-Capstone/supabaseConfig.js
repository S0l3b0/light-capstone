import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://fyllvadrvepxxlvpqomm.supabase.co"
const supabaseANONKey = "sb_publishable_KR_LZnNAJQlQKd8Ji3H98w_NPhXDmml"

const supabase = createClient(supabaseURL, supabaseANONKey);
export default supabase;