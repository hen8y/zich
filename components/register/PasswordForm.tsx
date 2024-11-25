import { TextInput, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../theme/ThemeUi";

interface PasswordFormProps {
    handlePasswordForm: () => void;
    isLoading: boolean;
}

export default function PasswordForm({
    handlePasswordForm,
    isLoading,
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
                    className={`${
                        isLoading
                            ? "bg-neutral-400 border border-neutral-500"
                            : "bg-primary shadow-md"
                    } w-full mt-16 py-5 btn`}
                    disabled={isLoading}
                >
                    <ThemedText
                        content="Sign Up"
                        className={`${
                            isLoading ? "text-neutral-700" : "text-white"
                        } font-medium text-xl`}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}
