import { RegisterFormType } from "@/app/(auth)/register";
import { useKeyboard } from "@/hooks";
import { Dispatch, SetStateAction, useState } from "react";
import { ScrollView, View } from "react-native";

import { PasswordInput } from "../inputs";
import { ThemedText } from "../theme";
import { Button } from "../ui";

interface PasswordFormProps {
    onComplete: () => void;
    isLoading: boolean;
    form: RegisterFormType;
    setForm: Dispatch<SetStateAction<RegisterFormType>>;
}

export default function PasswordForm({
    onComplete,
    isLoading,
    form,
    setForm,
}: PasswordFormProps): JSX.Element {
    const isKeyboardVisible = useKeyboard();
    const [formError, setFormError] = useState<{
        password: string;
        confirmPassword: string;
    }>({
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = () => {
        const passwordError =
            form.password.trim() === "" ? "Please enter password" : "";
        const confirmPasswordError =
            form.password.trim() === "" ? "Please confirm password" : "";

        if (passwordError || confirmPasswordError) {
            setFormError({
                password: passwordError,
                confirmPassword: confirmPasswordError,
            });
            return;
        }
        if (form.password !== form.confirmPassword) {
            setFormError({
                password: "",
                confirmPassword: "Passwords do not match",
            });
            return;
        }
        setFormError({
            password: "",
            confirmPassword: "",
        });
        onComplete();
    };
    return (
        <>
            <ScrollView
                contentContainerClassName="flex-grow"
                className="px-5 w-full mt-10"
            >
                <ThemedText
                    content="Create password"
                    className="font-bold text-2xl"
                />
                <ThemedText
                    content="Use a strong password with a mix of numbers, uppercase alphabets and special characters"
                    className="text-neutral-400 mt-2"
                />

                <PasswordInput
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    label="Password"
                    containerClassName="mt-5"
                    placeholder="Enter your password"
                    value={form.password}
                    error={formError.password}
                />

                <PasswordInput
                    handleChangeText={(e) =>
                        setForm({ ...form, confirmPassword: e })
                    }
                    label="Confirm Password"
                    containerClassName="mt-7"
                    placeholder="Confirm your password"
                    value={form.confirmPassword}
                    error={formError.confirmPassword}
                />
            </ScrollView>

            {!isKeyboardVisible && (
                <View className="mb-10 w-full px-5 gap-y-4 pb-16">
                    <Button
                        onPress={handleSubmit}
                        content="Proceed"
                        isLoading={isLoading}
                    />
                </View>
            )}
        </>
    );
}
