import { ProfileFormType } from "@/app/(tabs)/profile";
import { supabase } from "./supabase";
import { router } from "expo-router";

export const signUpWithEmail = async (
    email: string,
    password: string,
    name: string
) => {
    console.log("Starting signup process...");
    const { data: user, error: signupError } = await supabase.auth.signUp({
        email,
        password,
    });

    if (signupError) {
        console.error("Signup error:", signupError);
        throw new Error(signupError.message || "Sign-up failed");
    }

    console.log("User signed up:", user);

    const { error: profileError } = await supabase.from("profiles").insert({
        id: user?.user?.id,
        name,
    });

    if (profileError) {
        console.error("Profile error:", profileError);
        throw new Error(profileError.message || "Profile creation failed");
    }

    console.log("Profile created successfully");
};

export const fetchProfile = async (
    setProfileForm: (profileForm: ProfileFormType) => void
) => {
    try {
        const { data: user, error } = await supabase.auth.getUser();
        if (error) {
            console.error("Error getting user:", error.message);
            throw error;
        }

        if (user && user.user) {
            const { data, error: profileError } = await supabase
                .from("profiles")
                .select("username, avi")
                .eq("id", user.user.id)
                .single();

            if (profileError) {
                console.error("Error getting user:", profileError.message);
                throw error;
            }
            setProfileForm({
                username: data.username,
                email: user.user.email || "",
                avi: data.avi || require("@/assets/images/avatars/1.png"),
            });
        }
    } catch (error) {
        console.error("Error fetching profile:");
    }
};

export const updateAvi = async (newAviUrl: string) => {
    try {
        const { data: user, error } = await supabase.auth.getUser();
        if (error) {
            console.error("Error getting user:", error.message);
            throw error;
        }

        if (user && user.user) {
            const { data, error } = await supabase
                .from("profiles")
                .update({ avi: newAviUrl })
                .eq("id", user.user.id);

            if (error) {
                throw error;
            }
            console.log("Avatar updated successfully:", data);
        }
    } catch (error) {
        console.error("Error updating avatar");
    }
};

export const updateUsernameAndEmail = async (
    newUsername: string,
    newEmail: string
) => {
    try {
        const { data: user, error } = await supabase.auth.getUser();
        if (error) {
            console.error("Error getting user:", error.message);
            throw error;
        }

        if (user && user.user) {
            const { data: profileData, error: profileError } = await supabase
                .from("profiles")
                .update({ username: newUsername })
                .eq("id", user.user.id);

            if (profileError) {
                throw profileError;
            }

            const { error: emailError } = await supabase.auth.updateUser({
                email: newEmail,
            });

            if (emailError) {
                throw emailError;
            }
            console.log(
                "Username and email updated successfully:",
                profileData
            );
        }
    } catch (error) {
        console.error("Error updating username or email");
    }
};

export const logoutUser = () => {
    supabase.auth.signOut();
    router.replace("/");
};
