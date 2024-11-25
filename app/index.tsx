import { Image, TouchableOpacity, View } from "react-native";

import { ThemedText, ThemedView } from "@/components/theme/ThemeUi";
import { router } from "expo-router";
import { APP } from '@/constants';

export default function Index(): JSX.Element {
    return (
        <ThemedView className="pt-20 px-8 items-center">
            <View className="w-full absolute bottom-28 items-center">
                <Image source={require("@/assets/images/logo.png")} />
                <ThemedText content={APP.APP_NAME} className="logo" />
                <View className="mt-4 gap-y-4 w-full">
                    <TouchableOpacity
                        onPress={() => router.replace("/login")}
                        className="bg-primary w-full py-5 btn"
                    >
                        <ThemedText
                            content="Sign In"
                            className="text-white font-semibold"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => router.replace("/register")}
                        className="bg-secondary w-full py-5 btn"
                    >
                        <ThemedText
                            content="Sign Up"
                            className="text-primary font-semibold"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ThemedView>
    );
}
