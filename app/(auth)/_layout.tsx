import { Stack } from "expo-router";

export default function AuthLayout(): JSX.Element
{
    return (
        <Stack>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />
            <Stack.Screen
                name="forgot-password"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="verification"
                options={{ headerShown: false }}
            />
        </Stack>
    );
}