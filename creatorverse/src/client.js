import { createClient } from '@supabase/supabase-js';

const URL = 'https://dxvjbiznysijutjzzbzu.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4dmpiaXpueXNpanV0anp6Ynp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3NTQ4NDUsImV4cCI6MjA3MjMzMDg0NX0.44BavBi28_XdUKoZCThs0TP5NzZXxhBS9pBxK9puKpg';


export const supabase = createClient(URL, API_KEY);