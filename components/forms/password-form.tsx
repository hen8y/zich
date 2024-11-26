import { RegisterFormType } from "@/app/(auth)/register";
import useKeyboard from "@/hooks/use-keyboard";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Keyboard, ScrollView, TouchableOpacity, View } from "react-native";

import { PasswordInput } from "../inputs";
import { ThemedText } from "../theme";
import { Button } from "../ui";

interface PasswordFormProps {
    handlePasswordForm: () => void;
    isLoading: boolean;
    form: RegisterFormType;
    setForm: Dispatch<SetStateAction<RegisterFormType>>;
}

export default function PasswordForm({
    handlePasswordForm,
    isLoading,
    form,
    setForm,
}: PasswordFormProps): JSX.Element {
    const isKeyboardVisible = useKeyboard();
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
                />

                <PasswordInput
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    label="Confirm Password"
                    containerClassName="mt-7"
                    placeholder="Confirm your password"
                    value={form.confirmPassword}
                />
            </ScrollView>

            {!isKeyboardVisible && (
                <View className="mb-10 w-full px-5 gap-y-4 pb-16">
                    <Button
                        handleOnPress={handlePasswordForm}
                        content="Proceed"
                        isLoading={isLoading}
                    />
                </View>
            )}
        </>
    );
}
