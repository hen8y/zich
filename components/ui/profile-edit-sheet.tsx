import { Dispatch, RefObject, SetStateAction, useState } from "react";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import ActionSheetHeader from "./action-sheet-header";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { CustomTextInput } from "../inputs";
import { ThemedText } from "../theme/themed-text";
import CustomImagePicker from "./custom-image-picker";
import { ProfileFormType } from "@/app/(tabs)/profile";
import { updateUsernameAndEmail } from "@/lib/auth";

interface ProfileTabProps {
    actionSheetRef: RefObject<ActionSheetRef>;
    profileForm: ProfileFormType;
    setProfileForm: Dispatch<SetStateAction<ProfileFormType>>;
}

export default function ProfileEditSheet({
    actionSheetRef,
    profileForm,
    setProfileForm,
}: ProfileTabProps): JSX.Element {
    const [form, setForm] = useState<ProfileFormType>({
        ...profileForm,
    });

    const handleOnComplete = () => {
        actionSheetRef.current?.hide();
        if (
            form.username !== profileForm.username ||
            form.email !== profileForm.email
        ) {
            updateUsernameAndEmail(form.username, form.email);
            setProfileForm((prevState) => ({
                ...prevState,
                ...form,
                avi: prevState.avi,
            }));
        }
    };

    return (
        <ActionSheet
            containerStyle={{
                height: "97%",
                backgroundColor: "#fafafa",
                paddingBottom: Platform.OS === "ios" ? 20 : 0,
            }}
            ref={actionSheetRef}
        >
            <ActionSheetHeader
                onCancel={() => actionSheetRef.current?.hide()}
                onComplete={handleOnComplete}
                title="Edit Profile"
            />

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View className="mt-40 p-5">
                        <View className="w-full rounded-xl border border-neutral-200 bg-white p-4">
                            <View className="flex-row w-full gap-x-5 space">
                                <CustomTextInput
                                    handleChangeText={(e) =>
                                        setForm({ ...form, username: e })
                                    }
                                    label="Username"
                                    containerClassName="flex-1"
                                    placeholder="Your username"
                                    value={form.username}
                                    borderBottom={true}
                                />
                                <CustomImagePicker
                                    defaultImage={profileForm.avi}
                                    onUpdate={setProfileForm}
                                />
                            </View>

                            <CustomTextInput
                                handleChangeText={(e) =>
                                    setForm({ ...form, email: e })
                                }
                                label="Email"
                                placeholder="Your email"
                                value={form.email}
                                borderBottom={true}
                                containerClassName="mt-7"
                            />
                            <ThemedText
                                content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, itaque perferendis"
                                className="mt-7 text-neutral-400/95"
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ActionSheet>
    );
}
