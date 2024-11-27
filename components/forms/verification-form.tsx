import { useKeyboard } from "@/hooks";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity,
    View,
} from "react-native";

import { OTPInput } from "../inputs";
import { ThemedText } from "../theme";
import { Button } from "../ui";

interface VerificationFormProps {
    onComplete: () => void;
    onExit: () => void;
    isLoading: boolean;
}

export default function VerificationForm({
    onComplete,
    onExit,
    isLoading,
}: VerificationFormProps): JSX.Element {
    const isKeyboardVisible = useKeyboard();
    const [code, setCode] = useState<string>("");
    const [codeError, setCodeError] = useState<string>("");

    const handleOnPress = () => {
        if (code.trim() === "" || code.trim().length !== 4) {
            setCodeError("Enter Code");
            return;
        }
        setCodeError("");
        onComplete();
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1 w-full"
        >
            <ScrollView
                contentContainerClassName="flex-grow"
                className="px-5 w-full mt-10"
                keyboardShouldPersistTaps="handled"
            >
                <ThemedText
                    content="Enter confirmation code"
                    className="font-bold text-2xl"
                />
                <ThemedText
                    content="We sent a code to your email"
                    className="text-neutral-400 mt-2"
                />
                <OTPInput error={codeError} onComplete={(e) => setCode(e)} />
                <View className="flex-row gap-x-1 mt-5">
                    <ThemedText content="Didn't get the code?" />
                    <TouchableOpacity>
                        <ThemedText
                            content="Resend it"
                            className="text-black underline font-semibold"
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {!isKeyboardVisible && (
                <View className="mb-10 mt-16 flex-row w-full px-5 gap-x-4">
                    <TouchableOpacity
                        onPress={onExit}
                        className="bg-secondary w-36 py-5 btn border border-neutral-300"
                    >
                        <ThemedText
                            content="Go back"
                            className="text-primary font-medium text-xl"
                        />
                    </TouchableOpacity>
                    <Button
                        onPress={handleOnPress}
                        content="Proceed"
                        className="flex-1"
                        isLoading={isLoading}
                    />
                </View>
            )}
        </KeyboardAvoidingView>
    );
}
