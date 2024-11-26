import { RefObject, useState } from "react";
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

interface ProfileTabProps {
    actionSheetRef: RefObject<ActionSheetRef>;
}

export default function ProfileEditSheet({
    actionSheetRef,
}: ProfileTabProps): JSX.Element {
    const [form, setForm] = useState<{ name: string; email: string }>({
        name: "hen8y",
        email: "hen8y@outlook.com",
    });

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
                onComplete={() => actionSheetRef.current?.hide()}
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
                                        setForm({ ...form, name: e })
                                    }
                                    label="Name"
                                    containerClassName="flex-1"
                                    placeholder="Your name"
                                    value={form.name}
                                    borderBottom={true}
                                />
                                <CustomImagePicker
                                    defaultImage={
                                        "@/assets/images/avatars/1.png"
                                    }
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
