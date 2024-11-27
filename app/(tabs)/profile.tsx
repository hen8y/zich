import { ThemedText, ThemedView } from "@/components/theme";
import { ProfileEditSheet, ProfileTab } from "@/components/ui";
import { fetchProfile } from "@/lib/auth";
import { useEffect, useRef, useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { ActionSheetRef } from "react-native-actions-sheet";
import { Iconify } from "react-native-iconify";

export type ProfileFormType = {
    username: string;
    email: string;
    avi: any;
};

export default function Profile() {
    const actionSheetRef = useRef<ActionSheetRef>(null);
    const [profileForm, setProfileForm] = useState<ProfileFormType>({
        username: "",
        email: "",
        avi: "",
    });

    useEffect(() => {
        fetchProfile(setProfileForm);
    }, []);

    const profileTabLinks = [
        {
            name: "Account",
            icon: <Iconify icon="codicon:account" size={26} color="#404040" />,
            type: "link",
            details: "./account",
        },
        {
            name: "Language",
            icon: (
                <Iconify icon="lineicons:globe-1" size={26} color="#404040" />
            ),
            type: "select",
            details: ["English", "Spanish", "Latin"],
            action: () => {},
        },
        {
            name: "Dark Mode",
            icon: <Iconify icon="tdesign:moon" size={26} color="#404040" />,
            type: "toggle",
            details: true,
            action: () => {},
        },
    ];
    return (
        <ThemedView className="pt-24 px-5">
            <View className="bg-white border flex-row space border-neutral-200 p-5 gap-y-7 rounded-2xl">
                <View className="flex-row gap-2 items-center">
                    <Image
                        source={
                            typeof profileForm.avi === "string"
                                ? { uri: profileForm.avi }
                                : profileForm.avi
                        }
                        className="size-16 rounded-full"
                    />
                    <View>
                        <ThemedText
                            content={profileForm.username}
                            className="text-2xl font-semibold"
                        />
                        <ThemedText
                            content={profileForm.email}
                            className="mt-1 text-neutral-400"
                        />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => actionSheetRef.current?.show()}
                    className="rounded-md p-2 bg-neutral-100 px-4"
                >
                    <ThemedText
                        content="Edit Profile"
                        className="text-base font-semibold"
                    />
                </TouchableOpacity>
            </View>
            <View className="bg-white border mt-5 border-neutral-200 p-5 gap-y-7 rounded-2xl">
                {profileTabLinks.map((i, j) => (
                    <ProfileTab
                        key={j}
                        name={i.name}
                        details={i.details}
                        icon={i.icon}
                        type={i.type}
                        action={i.action}
                    />
                ))}
            </View>
            <ProfileEditSheet
                profileForm={profileForm}
                actionSheetRef={actionSheetRef}
            />
        </ThemedView>
    );
}
