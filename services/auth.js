import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'
export const supabase = createClient(supabaseUrl, supabaseKey)

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser()
    return user
    }
    