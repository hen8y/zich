import { router } from "expo-router";
import { Pressable, View } from "react-native";
import { ThemedText } from "../theme";
import { Iconify } from "react-native-iconify";
import { ToggleInput, SelectInput } from "../inputs";

interface ProfileTabProps {
    name: string;
    details: any;
    icon: JSX.Element;
    type: string;
    action?: () => void;
}

export default function ProfileTab({
    name,
    details,
    icon,
    type,
    action,
}: ProfileTabProps): JSX.Element {
    const DetailsContainer = () => {
        if (type === "link") {
            return (
                <Iconify
                    icon="icon-park-outline:right"
                    size={28}
                    color="#404040"
                />
            );
        } else if (type === "toggle") {
            return action ? <ToggleInput handleToggle={action} /> : null;
        } else {
            return action ? <SelectInput /> : null;
        }
    };

    return (
        <Pressable
            onPress={() => type === "link" && router.push(details)}
            className="flex-row items-center gap-x-2 justify-between"
        >
            <View className="flex-row gap-x-4 items-center">
                {icon}
                <ThemedText
                    content={name}
                    className="capitalize text-neutral-700 font-medium text-xl"
                />
            </View>
            {DetailsContainer()}
        </Pressable>
    );
}
