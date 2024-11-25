import { TouchableOpacity } from "react-native";

import { TextInput } from "react-native";

import { View } from "react-native";
import { ThemedText } from "../theme/ThemeUi";
import { router } from "expo-router";
import RoundedCheckbox from "../RoundedCheckbox";

interface EmailFormProps {
    handleFirstForm: () => void;
}

export default function EmailForm({
    handleFirstForm,
}: EmailFormProps): JSX.Element {
    return (
        <>
            <View className="px-5 w-full">
                <View className="mt-10">
                    <ThemedText content="Username" className="font-semibold" />
                    <TextInput
                        className="input"
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
                    className="bg-primary w-full py-5 btn shadow-md"
                >
                    <ThemedText
                        content="Proceed"
                        className="text-white font-medium text-xl"
                    />
                </TouchableOpacity>
                <View className="center flex-row gap-x-1">
                    <ThemedText content="Already have an account?" />
                    <TouchableOpacity onPress={() => router.push("./register")}>
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
