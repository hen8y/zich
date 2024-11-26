import { View, TextInput } from "react-native";
import { ThemedText } from "../theme";

interface CustomTextInputProps {
    label: string;
    handleChangeText: (text: string) => void;
    value: string;
    placeholder?: string;
    containerClassName?: string;
    hideLabel?: boolean;
    inputClassName?: string;
    borderBottom?: boolean;
}

export default function CustomTextInput({
    label,
    value,
    placeholder,
    handleChangeText,
    containerClassName,
    inputClassName,
    hideLabel = false,
    borderBottom = true,
}: CustomTextInputProps): JSX.Element {
    return (
        <View className={`w-full ${containerClassName}`}>
            <ThemedText className={`${hideLabel ? "hidden" : ""} input-label`}>
                {label}
            </ThemedText>
            <TextInput
                onChangeText={handleChangeText}
                placeholder={placeholder || ""}
                value={value}
                placeholderTextColor={"#aaa"}
                className={`
                    ${borderBottom ? "ghost-input" : "input"}
                    ${inputClassName || ""}
                `}
            />
        </View>
    );
}
