import { TouchableOpacity } from "react-native";

import { TextInput } from "react-native";

import { View } from "react-native";
import { ThemedText } from "../theme/ThemeUi";
import { router } from "expo-router";
import RoundedCheckbox from "../RoundedCheckbox";

interface EmailFormProps {
    handleFirstForm: () => void;
    isLoading: boolean;
}

export default function EmailForm({
    handleFirstForm,
    isLoading,
}: EmailFormProps): JSX.Element {
    return (
        <>
            <View className="px-5 w-full">
                <View className="mt-10">
                    <ThemedText content="Username" className="font-semibold" />
                    <TextInput
                        className="input leading-normal"
                        placeholder="Choose Username"
                    />
                </View>
                <View className="mt-7">
                    <ThemedText content="Email" className="font-semibold" />
                    <TextInput className="input" placeholder="Your email" />
                </View>
            </View>

            <View className="flex-1 absolute bottom-20 w-full px-5 gap-y-4">
                <RoundedCheckbox label="I accept the terms and privacy policy" />
                <TouchableOpacity
                    onPress={handleFirstForm}
                    className={`${
                        isLoading
                            ? "bg-neutral-400 border border-neutral-500"
                            : "bg-primary shadow-md"
                    } w-full mt-16 py-5 btn`}
                    disabled={isLoading}
                >
                    <ThemedText
                        content="Proceed"
                        className={`${
                            isLoading ? "text-neutral-700" : "text-white"
                        } font-medium text-xl`}
                    />
                </TouchableOpacity>
                <View className="center flex-row gap-x-1">
                    <ThemedText content="Already have an account?" />
                    <TouchableOpacity onPress={() => router.replace("./login")}>
                        <ThemedText
                            content="Log in"
                            className="text-black underline font-semibold"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}
