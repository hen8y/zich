import { ThemedView, ThemedText } from "@/components/theme/ThemeUi";
import { router } from "expo-router";
import { Image, Pressable, View } from "react-native";

export default function NotFoundScreen(): JSX.Element
{
    return (
        <ThemedView className="pt-20 center">
            <Image
                source={require("@/assets/images/error/404.png")}
                className="size-60 absolute top-40"
            />
            <View className="mt-32 center">
                <ThemedText className="text-neutral-500" content="This screen doesn't exist." />
                <ThemedText className="text-neutral-500" content="Go to home screen!" />
                <Pressable 
                    onPress={() => router.replace('./')}
                    className="btn shadow-md px-10 mt-7 bg-primary">
                    <ThemedText
                        className="text-white text-sm font-semibold"
                        content="GO HOME"
                    />
                </Pressable>
            </View>
        </ThemedView>
    );
}
