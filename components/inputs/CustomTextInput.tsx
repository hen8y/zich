import { View, TextInput } from "react-native";
import { ThemedText } from "../theme/ThemeUi";

interface CustomTextInputProps {
    label: string;
    handleChangeText: (text: string) => void;
    value: string;
    placeholder?: string;
    containerClassName?: string;
    hideLabel?: boolean;
    inputClassName?: string;
}

export default function CustomTextInput({
    label,
    value,
    placeholder,
    handleChangeText,
    containerClassName,
    inputClassName,
    hideLabel = false,
}: CustomTextInputProps) {
    return (
        <View className={`w-full ${containerClassName}`}>
            <ThemedText className={`${hideLabel ? "hidden" : ""} input-label`}>
                {label}
            </ThemedText>
            <TextInput
                onChangeText={handleChangeText}
                placeholder={placeholder || ""}
                value={value}
                className={`input ${inputClassName || ""}`}
            />
        </View>
    );
}
