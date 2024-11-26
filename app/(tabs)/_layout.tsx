import { Tabs } from "expo-router";
import { Platform, View } from "react-native";
import { Iconify } from "react-native-iconify";
import { APP } from "@/constants";

export type TabsLayoutProps = {
    icon: () => JSX.Element;
    focused: boolean;
};

export default function TabsLayout(): JSX.Element {
    const TabIcons = ({ icon, focused }: TabsLayoutProps) => {
        return (
            <View className="center rounded-full size-10 p-3">{icon()}</View>
        );
    };

    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#fff",
                    width: "100%",
                    margin: "auto",
                    alignItems: "center",
                    paddingTop: 10,
                    height: Platform.OS == "ios" ? 80 : 60,
                    justifyContent: "center",
                    borderTopColor: "#888",
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Iconify
                                icon="solar:home-angle-outline"
                                size={20}
                                color={focused ? APP.PRIMARY_COLOR : "#555"}
                            />
                        );
                    },
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    title: "Profile",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Iconify
                                icon="solar:user-outline"
                                size={20}
                                color={focused ? APP.PRIMARY_COLOR : "#555"}
                            />
                        );
                    },
                }}
            />
        </Tabs>
    );
}
