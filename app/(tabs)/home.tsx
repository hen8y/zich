import { ThemedText, ThemedView } from "@/components/theme";
import { Link } from "expo-router";

export default function Home() {
    return (
        <ThemedView className="pt-20">
            <Link href={"/login"}>logout</Link>
            <ThemedText content="Home" className="mt-10" />
        </ThemedView>
    );
}
