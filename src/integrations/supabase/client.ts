// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wqztoiuylzxsjgadbcoz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxenRvaXV5bHp4c2pnYWRiY296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NTA0MzUsImV4cCI6MjA2MTMyNjQzNX0.kmEEU2XGEbYgeyG0a5OOeRt5DWK6ZFTkLkUW1cHBwvg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);