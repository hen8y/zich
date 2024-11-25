import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { ThemedText, ThemedView } from "@/components/theme/ThemeUi";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";
import { useState } from "react";

export default function Login(): JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLogin = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.replace("/home");
        }, 2000);
    };

    return (
        <ThemedView isLoading={isLoading} className="items-center pt-20">
            <View className="size-20 mx-auto rounded-full p-3 bg-neutral-200 center">
                <Image source={require("@/assets/images/logo.png")} />
            </View>
            <View className="px-5 w-full mt-14">
                <ThemedText
                    content="Welcome Back"
                    className="text-3xl font-semibold"
                />

                <View className="mt-10">
                    <View>
                        <ThemedText content="Email" className="font-semibold" />
                        <TextInput
                            className="input"
                            autoCapitalize="none"
                            placeholder="Your email"
                            inputMode="email"
                        />
                    </View>

                    <View className="mt-7">
                        <ThemedText
                            content="Password"
                            className="font-semibold"
                        />
                        <TextInput
                            className="input"
                            placeholder="Enter your password"
                            secureTextEntry={true}
                        />
                    </View>

                    <TouchableOpacity 
                        onPress={handleLogin}
                        className={`${isLoading ? 'bg-neutral-400 border border-neutral-500' : 'bg-primary shadow-md'} w-full mt-16 py-5 btn`}
                        disabled={isLoading}
                        >
                        <ThemedText
                            content="Sign In"
                            className={`${isLoading ? 'text-neutral-700' : 'text-white'} font-medium text-xl`}
                        />
                    </TouchableOpacity>

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
            <View className="center flex-row gap-x-1 flex-1 absolute bottom-20">
                <ThemedText content="Don't have an account?" />
                <TouchableOpacity onPress={() => router.replace("./register")}>
                    <ThemedText
                        content="Sign up"
                        className="text-black underline font-semibold"
                    />
                </TouchableOpacity>
            </View>
        </ThemedView>
    );
}
