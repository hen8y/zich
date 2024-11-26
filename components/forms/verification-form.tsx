import useKeyboard from "@/hooks/use-keyboard";
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
    handleVerificationForm: () => void;
    handleGoBack: () => void;
    isLoading: boolean;
}

export default function VerificationForm({
    handleVerificationForm,
    handleGoBack,
    isLoading,
}: VerificationFormProps): JSX.Element {
    const isKeyboardVisible = useKeyboard();

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
                <OTPInput />
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
                        onPress={handleGoBack}
                        className="bg-secondary w-36 py-5 btn border border-neutral-300"
                    >
                        <ThemedText
                            content="Go back"
                            className="text-primary font-medium text-xl"
                        />
                    </TouchableOpacity>
                    <Button
                        handleOnPress={handleVerificationForm}
                        content="Proceed"
                        className="flex-1"
                        isLoading={isLoading}
                    />
                </View>
            )}
        </KeyboardAvoidingView>
    );
}
