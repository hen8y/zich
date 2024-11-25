import { ThemedText, ThemedView } from "@/components/theme/ThemeUi";
import { useState } from "react";
import { Image, View } from "react-native";
import EmailForm from "@/components/register/EmailForm";
import PasswordForm from "@/components/register/PasswordForm";
import VerificationForm from "@/components/register/VerificationForm";
import { router } from "expo-router";

export type RegisterFormType = {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
};

export default function Register(): JSX.Element {
    const [step, setStep] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [form, setForm] = useState<RegisterFormType>({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleFirstForm = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep(2);
        }, 1000);
    };

    const handleGoBack = () => {
        setStep(1);
    };

    const handleVerificationForm = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep(3);
        }, 1000);
    };

    const handlePasswordForm = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            router.replace("/home");
        }, 1000);
    };
    return (
        <ThemedView isLoading={isLoading} className="items-center pt-20">
            <View className="size-20 mx-auto rounded-full p-3 bg-neutral-200 center">
                <Image source={require("@/assets/images/logo.png")} />
            </View>
            <View className="px-5 w-full mt-14">
                <ThemedText
                    content="Create an Account"
                    className="text-3xl font-semibold"
                />

                <View className="flex-row mt-7 gap-2 w-full">
                    {[1, 2, 3].map((i) => (
                        <View
                            key={i}
                            className={`h-1 ${
                                step === i
                                    ? "bg-primary rounded-full"
                                    : "bg-secondary"
                            } w-12`}
                        ></View>
                    ))}
                </View>
            </View>
            {step === 1 ? (
                <EmailForm
                    form={form}
                    setForm={setForm}
                    isLoading={isLoading}
                    handleFirstForm={handleFirstForm}
                />
            ) : step === 2 ? (
                <VerificationForm
                    isLoading={isLoading}
                    handleVerificationForm={handleVerificationForm}
                    handleGoBack={handleGoBack}
                />
            ) : (
                <PasswordForm
                    form={form}
                    setForm={setForm}
                    isLoading={isLoading}
                    handlePasswordForm={handlePasswordForm}
                />
            )}
        </ThemedView>
    );
}
