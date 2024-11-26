import { useRef, useState } from "react";
import { View, TextInput, Keyboard, Pressable } from "react-native";
import { ThemedText } from "../theme";
import * as Clipboard from "expo-clipboard";

interface OTPInputProps {
    length?: number;
    onComplete?: (otp: string) => void;
}

export default function OTPInput({
    length = 4,
    onComplete,
}: OTPInputProps): JSX.Element {
    const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);
    const inputRefs = useRef<TextInput[]>([]);

    const handlePaste = async () => {
        try {
            const content = await Clipboard.getStringAsync();
            const numericContent = content.replace(/[^0-9]/g, "");

            if (numericContent.length >= length) {
                const otpArray = numericContent.slice(0, length).split("");
                setOtp(otpArray);
                onComplete?.(otpArray.join(""));
                inputRefs.current[length - 1].focus();
                Keyboard.dismiss();
            }
        } catch (error) {
            console.error("Failed to paste OTP:", error);
        }
    };

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }

        if (newOtp.every((digit) => digit !== "")) {
            onComplete?.(newOtp.join(""));
            Keyboard.dismiss();
        }
    };

    const handleKeyPress = (event: any, index: number) => {
        if (event.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <View>
            <View className="flex-row mt-6 items-center gap-2">
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => {
                            if (ref) inputRefs.current[index] = ref;
                        }}
                        className={`size-16 border rounded-lg text-center text-3xl font-semibold text-primary bg-white ${
                            focusedIndex === index
                                ? "border-primary"
                                : "border-gray-300"
                        }`}
                        maxLength={1}
                        keyboardType="number-pad"
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        onFocus={() => setFocusedIndex(index)}
                        onBlur={() => setFocusedIndex(-1)}
                        autoComplete="off"
                        selectTextOnFocus
                    />
                ))}
            </View>
            <Pressable onPress={handlePaste} className="mt-1">
                <ThemedText
                    className="text-primary text-sm font-semibold"
                    content="Paste code"
                />
            </Pressable>
        </View>
    );
}
