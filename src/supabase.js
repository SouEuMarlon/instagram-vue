
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oddofnuqjknqvairlkhj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kZG9mbnVxamtucXZhaXJsa2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1ODgyMDIsImV4cCI6MjAzOTE2NDIwMn0.DDfPIdhOt_N_kNeLihGU83Rx9YR9dTbTzvAxNOdzZC0"
// const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)