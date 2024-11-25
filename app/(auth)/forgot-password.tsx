import CustomTextInput from "@/components/inputs/custom-text-input";
import { ThemedView } from "@/components/theme";
import { ThemedText } from "@/components/theme";
import { router } from "expo-router";
import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

export default function ForgotPassword(): JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");

    const handlePasswordRequest = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.replace("/home");
        }, 1000);
    };

    return (
        <ThemedView isLoading={isLoading} className="items-center pt-20">
            <View className="size-20 mx-auto rounded-full p-3 bg-neutral-200 center">
                <Image source={require("@/assets/images/logo.png")} />
            </View>
            <View className="px-5 w-full mt-14">
                <ThemedText
                    content="Forgot Password"
                    className="text-3xl font-semibold"
                />
                <ThemedText
                    content="Enter your email address and we would send you an email containing a link to reset your password"
                    className="text-neutral-400 mt-3"
                />

                <CustomTextInput
                    handleChangeText={(e) => setEmail(e)}
                    label="Email Address"
                    containerClassName="mt-7"
                    placeholder="Your email"
                    value={email}
                />
            </View>

            <View className="flex-1 absolute bottom-20 w-full px-5 gap-y-4">
                <TouchableOpacity
                    onPress={handlePasswordRequest}
                    className={`${
                        isLoading
                            ? "bg-neutral-400 border border-neutral-500"
                            : "bg-primary shadow-md"
                    } w-full py-5 btn`}
                    disabled={isLoading}
                >
                    <ThemedText
                        content="Proceed"
                        className={`${
                            isLoading ? "text-neutral-700" : "text-white"
                        } font-medium text-xl`}
                    />
                </TouchableOpacity>
            </View>
        </ThemedView>
    );
}
