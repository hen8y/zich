import { TouchableOpacity, View } from "react-native";
import { SetStateAction, Dispatch } from "react";
import { ThemedText } from "../theme/ThemeUi";
import { router } from "expo-router";
import RoundedCheckbox from "../RoundedCheckbox";
import CustomTextInput from "../inputs/CustomTextInput";
import { RegisterFormType } from "@/app/(auth)/register";

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
    return (
        <>
            <View className="px-5 mt-10 w-full">
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
            </View>

            <View className="flex-1 absolute bottom-20 w-full px-5 gap-y-4">
                <RoundedCheckbox label="I accept the terms and privacy policy" />
                <TouchableOpacity
                    onPress={handleFirstForm}
                    className={`${
                        isLoading
                            ? "bg-neutral-400 border border-neutral-500"
                            : "bg-primary shadow-md"
                    } w-full py-5 btn`}
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
