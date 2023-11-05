import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hwmkchxesimiekmvzlrt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3bWtjaHhlc2ltaWVrbXZ6bHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkxODM5MTIsImV4cCI6MjAxNDc1OTkxMn0.wTOa_FZDbNHVq9imRpOHWX1O0c4D731l5z2TfJ-G4zw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
