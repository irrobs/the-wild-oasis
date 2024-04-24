import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qcmdpvdkxldsgdqxdqzk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjbWRwdmRreGxkc2dkcXhkcXprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3MTQ5NTMsImV4cCI6MjAyODI5MDk1M30.rXZNcZIQ4Vw75y8Wu4J6HiuM78wXwksxo2mPcX8vU6k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
