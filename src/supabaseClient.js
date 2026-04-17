const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let client = null;
try {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Faltan las variables de entorno de Supabase en Vercel.");
  } else if (window.supabase) {
    client = window.supabase.createClient(supabaseUrl, supabaseAnonKey);
  }
} catch (error) {
  console.error("Error inicializando Supabase:", error);
}

export const supabase = client;
