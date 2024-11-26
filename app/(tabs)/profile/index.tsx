import { ThemedView } from "@/components/theme";
import ProfileTab from "@/components/ui/profile-tab";
import { View } from "react-native";
import { Iconify } from "react-native-iconify";

export default function Profile() {
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
        <ThemedView className="pt-20 px-5">
            <View className="bg-white p-5 gap-y-7 rounded-2xl">
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
        </ThemedView>
    );
}
