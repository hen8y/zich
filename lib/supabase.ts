import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { AppState } from "react-native";

import "react-native-url-polyfill/auto";

const supabaseUrl = "https://mpcmurffvdbaowmnmqbc.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wY211cmZmdmRiYW93bW5tcWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI2NTc3NDUsImV4cCI6MjA0ODIzMzc0NX0.HtrtVGeB4rUMgsQ9XIFLV8M6cF9GPj6q_R2L3Lt04Os";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener("change", (state) => {
    if (state === "active") {
        supabase.auth.startAutoRefresh();
    } else {
        supabase.auth.stopAutoRefresh();
    }
});
// nARJsFUfGYZSk2oZ
