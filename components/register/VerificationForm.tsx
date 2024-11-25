import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "../theme/ThemeUi";
import OTPInput from "../OTPInput";

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
    return (
        <>
            <View className="px-5 w-full mt-10">
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
            </View>

            <View className="flex-1 flex-row absolute bottom-20 w-full px-5 gap-x-4">
                <TouchableOpacity
                    onPress={handleGoBack}
                    className="bg-secondary w-36 py-5 btn border border-neutral-300"
                >
                    <ThemedText
                        content="Go back"
                        className="text-primary font-medium text-xl"
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleVerificationForm}
                    className={`${
                        isLoading
                            ? "bg-neutral-400 border border-neutral-500"
                            : "bg-primary shadow-md"
                    } flex-1 py-5 btn`}
                    disabled={isLoading}
                >
                    <ThemedText
                        content="Proceed"
                        className={`${
                            isLoading ? "text-neutral-700" : "text-white"
                        } font-medium text-xl`}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}
