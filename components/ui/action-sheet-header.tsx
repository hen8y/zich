import { View, Pressable } from "react-native";
import { ThemedText } from "../theme";

interface ActionSheetHeaderProps {
    title: string;
    onCancel: () => void;
    onComplete: () => void;
}

export default function ActionSheetHeader({
    title,
    onCancel,
    onComplete,
}: ActionSheetHeaderProps): JSX.Element {
    return (
        <View className="flex-row space p-4 rounded-t-lg bg-white border-b border-neutral-200">
            <Pressable onPress={onCancel}>
                <ThemedText content="Cancel" />
            </Pressable>
            <ThemedText content={title} className="text-xl font-bold" />
            <Pressable onPress={onComplete}>
                <ThemedText content="Done" className="font-semibold" />
            </Pressable>
        </View>
    );
}
