import { supabase } from "@/lib/supabase";
import { router } from "expo-router";

export default async function checkLoggedIn() {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
        console.error("Error retrieving session:", error.message);
        return;
    }
    if (data.session) {
        router.replace("/home");
    }
}
