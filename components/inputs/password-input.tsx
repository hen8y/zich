import { View, TextInput, Pressable } from "react-native";
import { ThemedText } from "../theme";
import { useState } from "react";
import { Iconify } from "react-native-iconify";

interface PasswordInputProps {
    label: string;
    handleChangeText: (text: string) => void;
    value: string;
    placeholder?: string;
    containerClassName?: string;
    hideLabel?: boolean;
    inputClassName?: string;
}

export default function PasswordInput({
    label,
    value,
    placeholder,
    handleChangeText,
    containerClassName,
    inputClassName,
    hideLabel = false,
}: PasswordInputProps): JSX.Element {
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

    const icon = secureTextEntry ? (
        <Iconify icon="weui:eyes-on-filled" size={18} color="#262626" />
    ) : (
        <Iconify icon="weui:eyes-off-filled" size={18} color="#262626" />
    );

    return (
        <View className={`w-full ${containerClassName}`}>
            <ThemedText className={`${hideLabel ? "hidden" : ""} input-label`}>
                {label}
            </ThemedText>
            <View className="flex-row items-center">
                <TextInput
                    onChangeText={handleChangeText}
                    placeholder={placeholder || ""}
                    value={value}
                    placeholderTextColor={"#aaa"}
                    className={`input rounded-r-none flex-1 ${
                        inputClassName || ""
                    }`}
                    secureTextEntry={secureTextEntry}
                />
                <View className="size-16 mt-2 rounded-r-lg center border-neutral-300 border-l-0 border">
                    <Pressable
                        onPress={() => setSecureTextEntry(!secureTextEntry)}
                    >
                        {icon}
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
