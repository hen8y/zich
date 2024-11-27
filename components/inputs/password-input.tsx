import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { Iconify } from "react-native-iconify";

import { ThemedText } from "../theme";

interface PasswordInputProps {
    label: string;
    handleChangeText: (text: string) => void;
    value: string;
    placeholder?: string;
    containerClassName?: string;
    hideLabel?: boolean;
    inputClassName?: string;
    error?: string;
}

export default function PasswordInput({
    label,
    value,
    placeholder,
    handleChangeText,
    containerClassName,
    inputClassName,
    hideLabel = false,
    error = "",
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
                    className={`
                        input rounded-r-none flex-1 
                        ${inputClassName || ""}
                        ${
                            error
                                ? "border-red-300 focus:border-primary/50"
                                : "border-neutral-300 focus:border-primary/50 "
                        }
                    `}
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
