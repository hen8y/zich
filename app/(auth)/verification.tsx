import { SafeAreaView, Text } from "react-native";
import { Iconify } from "react-native-iconify";

export default function Verification(): JSX.Element
{
    return (
        <SafeAreaView>
            <Text className="text-2xl font-bold">Verification</Text>
            <Iconify icon="hugeicons:home-01" size={24} color="#900" />
        </SafeAreaView>
    );
}
