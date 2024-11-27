import { CustomTextInput, PasswordInput } from "@/components/inputs";
import { ThemedText } from "@/components/theme";
import { AuthThemedView } from "@/components/theme/auth-theme-view";
import { Button } from "@/components/ui";
import { supabase } from "@/lib/supabase";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";

export default function Login(): JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [form, setForm] = useState<{ email: string; password: string }>({
        email: "",
        password: "",
    });
    const [formError, setFormError] = useState<{
        email: string;
        password: string;
    }>({
        email: "",
        password: "",
    });

    const handleInputChange = (type: string, text: string) => {
        const error = text.trim() === "" ? `Please enter your ${type}` : "";

        if (type === "email") {
            setForm({ ...form, email: text });
            setFormError({ ...formError, email: error });
        } else {
            setForm({ ...form, password: text });
            setFormError({ ...formError, email: error });
        }
    };

    const handleLogin = async () => {
        const emailError =
            form.email.trim() === ""
                ? "Please enter your email"
                : !/\S+@\S+\.\S+/.test(form.email)
                ? "Invalid email address"
                : "";
        const passwordError =
            form.password.trim() === "" ? "Please enter your password" : "";

        if (emailError || passwordError) {
            setFormError({ email: emailError, password: passwordError });
            return;
        }
        setIsLoading(true);
        const { error } = await supabase.auth.signInWithPassword(form);

        if (error) {
            alert(error.message);
            setFormError({
                email: "Error Logging in",
                password: "Error Logging in",
            });
        }
        setIsLoading(false);
    };

    return (
        <AuthThemedView isLoading={isLoading} className="items-center pt-20">
            <View className="size-20 mx-auto rounded-full p-3 bg-neutral-200 center">
                <Image source={require("@/assets/images/logo.png")} />
            </View>
            <View className="px-5 w-full mt-14">
                <ThemedText
                    content="Welcome Back"
                    className="text-3xl font-semibold"
                />

                <View className="mt-10">
                    <CustomTextInput
                        handleChangeText={(e) => handleInputChange("email", e)}
                        label="Email"
                        placeholder="Your email"
                        value={form.email}
                        error={formError.email}
                    />
                    <PasswordInput
                        handleChangeText={(e) =>
                            handleInputChange("password", e)
                        }
                        label="Password"
                        containerClassName="mt-7"
                        placeholder="Enter your password"
                        value={form.password}
                        error={formError.password}
                    />
                    <Link
                        href={"/forgot-password"}
                        className="mt-2 mb-10 ml-auto"
                    >
                        <ThemedText
                            className="text-primary font-semibold"
                            content="Forgot Password?"
                        />
                    </Link>
                    <Button
                        onPress={handleLogin}
                        content="Sign in"
                        isLoading={isLoading}
                    />
                    <View className="gap-2 my-8 flex-row items-center justify-center">
                        <View className="h-[1px] flex-1 bg-zinc-300" />
                        <ThemedText>Or continue using</ThemedText>
                        <View className="h-[1px] flex-1 bg-zinc-300" />
                    </View>
                    <View className="space flex-row gap-x-4">
                        <TouchableOpacity className="bg-secondary flex-1 py-5 rounded-lg center  w-full">
                            <Iconify
                                icon="logos:google-icon"
                                size={24}
                                color="#fff"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-secondary flex-1 py-5 rounded-lg center  w-full">
                            <Iconify
                                icon="logos:apple"
                                size={24}
                                color="#fff"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View className="center flex-row gap-x-1 flex-1">
                <ThemedText content="Don't have an account?" />
                <TouchableOpacity onPress={() => router.replace("./register")}>
                    <ThemedText
                        content="Sign up"
                        className="text-black underline font-semibold"
                    />
                </TouchableOpacity>
            </View>
        </AuthThemedView>
    );
}
