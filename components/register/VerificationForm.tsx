import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "../theme/ThemeUi";
import OTPInput from "../OTPInput";

interface VerificationFormProps {
    handleVerificationForm: () => void;
    handleEdit: () => void;
}

export default function VerificationForm({
    handleVerificationForm,
    handleEdit,
}: VerificationFormProps): JSX.Element {
    return (
        <>
            <View className="px-5 w-full center mt-10">
                <ThemedText
                    content="OTP Verification"
                    className="font-bold text-2xl"
                />
                <ThemedText
                    content="Enter OTP Sent to your Email"
                    className="text-neutral-500 mt-2"
                />
                <OTPInput />
                <View className="center flex-row gap-x-1 mt-5">
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
                    onPress={handleEdit}
                    className="bg-secondary w-32 py-5 btn border border-neutral-300"
                >
                    <ThemedText
                        content="Edit"
                        className="text-primary font-medium text-xl"
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleVerificationForm}
                    className="bg-primary flex-1 py-5 btn shadow-md"
                >
                    <ThemedText
                        content="Proceed"
                        className="text-white font-medium text-xl"
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}
