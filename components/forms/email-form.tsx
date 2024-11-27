import { RegisterFormType } from "@/app/(auth)/register";
import useKeyboard from "@/hooks/use-keyboard";
import { router } from "expo-router";
import { Dispatch, SetStateAction, useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";

import { CustomTextInput, RoundedCheckbox } from "../inputs";
import { ThemedText } from "../theme";
import { Button } from "../ui";

interface EmailFormProps {
    onComplete: () => void;
    isLoading: boolean;
    form: RegisterFormType;
    setForm: Dispatch<SetStateAction<RegisterFormType>>;
}

export default function EmailForm({
    onComplete,
    isLoading,
    form,
    setForm,
}: EmailFormProps): JSX.Element {
    const isKeyboardVisible = useKeyboard();
    const [termsIsChecked, setTermsIsChecked] = useState<boolean>(false);
    const [formError, setFormError] = useState<{
        email: string;
        username: string;
        checkbox: string;
    }>({
        email: "",
        username: "",
        checkbox: "",
    });

    const handleSubmit = () => {
        const emailError =
            form.email.trim() === ""
                ? "Please enter email address"
                : !/\S+@\S+\.\S+/.test(form.email)
                ? "Invalid email address"
                : "";
        const usernameError =
            form.username.trim() === "" ? "Please enter a username" : "";
        if (emailError || usernameError || !termsIsChecked) {
            setFormError({
                checkbox: "Accept terms and policy",
                email: emailError,
                username: usernameError,
            });
            return;
        }
        setFormError({
            checkbox: "",
            email: "",
            username: "",
        });
        onComplete();
    };
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
                    error={formError.username}
                />

                <CustomTextInput
                    handleChangeText={(e) => setForm({ ...form, email: e })}
                    label="Email Address"
                    containerClassName="mt-7"
                    placeholder="Your email"
                    value={form.email}
                    error={formError.email}
                />
            </ScrollView>

            {!isKeyboardVisible && (
                <View className="mb-10 w-full px-5 gap-y-4">
                    <RoundedCheckbox
                        error={formError.checkbox}
                        onChange={(e) => setTermsIsChecked(e)}
                        label="I accept the terms and privacy policy"
                    />
                    <Button
                        onPress={handleSubmit}
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
