import { TextInput, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../theme/ThemeUi";

interface PasswordFormProps {
    handlePasswordForm: () => void;
}

export default function PasswordForm({
    handlePasswordForm,
}: PasswordFormProps): JSX.Element {
    return (
        <>
            <View className="px-5 w-full">
                <View className="mt-7">
                    <ThemedText content="Password" className="font-semibold" />
                    <TextInput
                        className="input leading-normal"
                        placeholder="Enter your password"
                        secureTextEntry={true}
                    />
                </View>
                <View className="mt-7">
                    <ThemedText
                        content="Confirm Password"
                        className="font-semibold"
                    />
                    <TextInput
                        className="input leading-normal"
                        placeholder="Confirm your password"
                        secureTextEntry={true}
                    />
                </View>
            </View>

            <View className="flex-1 absolute bottom-20 w-full px-5 gap-y-4">
                <TouchableOpacity
                    onPress={handlePasswordForm}
                    className="bg-primary w-full py-5 btn shadow-md"
                >
                    <ThemedText
                        content="Sign Up"
                        className="text-white font-medium text-xl"
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}
