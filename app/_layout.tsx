import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "@/global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout(): JSX.Element|null
{
    const [loaded, error] = useFonts({
        SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    });

    useEffect(() => {
        if (error) throw error;
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [error, loaded]);

    if (!loaded || error) return null;
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" options={{ headerShown: false }}  />
        </Stack>
    );
}
