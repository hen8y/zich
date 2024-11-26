import { RegisterFormType } from "@/app/(auth)/register";
import useKeyboard from "@/hooks/use-keyboard";
import { router } from "expo-router";
import { Dispatch, SetStateAction } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

import { CustomTextInput, RoundedCheckbox } from "../inputs";
import { ThemedText } from "../theme";
import { Button } from "../ui";

interface EmailFormProps {
    handleFirstForm: () => void;
    isLoading: boolean;
    form: RegisterFormType;
    setForm: Dispatch<SetStateAction<RegisterFormType>>;
}

export default function EmailForm({
    handleFirstForm,
    isLoading,
    form,
    setForm,
}: EmailFormProps): JSX.Element {
    const isKeyboardVisible = useKeyboard();
    return (
        <>
            <ScrollView
                contentContainerClassName="flex-grow"
                className="px-5 mt-10 w-full"
            >
                <CustomTextInput
                    handleChangeText={(e) => setForm({ ...form, username: e })}
                    label="Username"
                    placeholder="Choose username"
                    value={form.username}
                />

                <CustomTextInput
                    handleChangeText={(e) => setForm({ ...form, email: e })}
                    label="Email Address"
                    containerClassName="mt-7"
                    placeholder="Your email"
                    value={form.email}
                />
            </ScrollView>

            {!isKeyboardVisible && (
                <View className="mb-10 w-full px-5 gap-y-4">
                    <RoundedCheckbox label="I accept the terms and privacy policy" />
                    <Button
                        handleOnPress={handleFirstForm}
                        content="Proceed"
                        isLoading={isLoading}
                    />
                    <View className="center flex-row gap-x-1">
                        <ThemedText content="Already have an account?" />
                        <TouchableOpacity
                            onPress={() => router.replace("./login")}
                        >
                            <ThemedText
                                content="Log in"
                                className="text-black underline font-semibold"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    );
}
