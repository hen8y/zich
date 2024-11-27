import { ThemedText, ThemedView } from "@/components/theme";
import { ExternalLink } from "@/components/ui";
import { logoutUser } from "@/lib/auth";
import { Pressable, View } from "react-native";

export default function Home() {
    return (
        <ThemedView className="px-5 center">
            <ThemedText
                content="Features"
                className="text-center text-3xl font-semibold"
            />
            <View className="w-full border mt-4 px-5 py-1 rounded-lg border-neutral-200 h-56 bg-white">
                <Pressable className="border-b py-4 border-stone-200">
                    <ExternalLink href="https://hen8y.dev">
                        <ThemedText
                            content="✅ Homepage"
                            className="font-semibold"
                        />
                    </ExternalLink>
                </Pressable>
            </View>
            <Pressable
                onPress={logoutUser}
                className="mt-5 p-2 px-4 bg-white border border-neutral-200 rounded-lg"
            >
                <ThemedText
                    content="Log out"
                    className="text-red-500 font-semibold"
                />
            </Pressable>
        </ThemedView>
    );
}
