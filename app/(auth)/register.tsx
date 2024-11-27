import EmailForm from "@/components/forms/email-form";
import PasswordForm from "@/components/forms/password-form";
import VerificationForm from "@/components/forms/verification-form";
import { ThemedText } from "@/components/theme";
import { AuthThemedView } from "@/components/theme/auth-theme-view";
import { checkLoggedIn } from "@/hooks";
import { signUpWithEmail } from "@/lib/auth";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";

export type RegisterFormType = {
    email: string;
    username: string;
    password: string;
    confirmPassword?: string;
};

export default function Register(): JSX.Element {
    useEffect(() => {
        checkLoggedIn();
    });

    const [step, setStep] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [form, setForm] = useState<RegisterFormType>({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });
    const handleSignUp = async () => {
        setIsLoading(true);
        try {
            await signUpWithEmail(form.email, form.password, form.username);
        } catch (error: any) {
            alert(error.message || "An unknown error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthThemedView isLoading={isLoading} className="items-center pt-20">
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
                    onComplete={() => setStep(2)}
                />
            ) : step === 2 ? (
                <VerificationForm
                    isLoading={isLoading}
                    onComplete={() => setStep(3)}
                    onExit={() => setStep(1)}
                />
            ) : (
                <PasswordForm
                    form={form}
                    setForm={setForm}
                    isLoading={isLoading}
                    onComplete={handleSignUp}
                />
            )}
        </AuthThemedView>
    );
}
