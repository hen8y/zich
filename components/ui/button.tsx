import { TouchableOpacity } from "react-native";
import { ThemedText } from "../theme";

type ButtonProps = {
    content: string;
    isLoading: boolean;
    handleOnPress: () => void;
    className?: string;
};

export function Button({
    content,
    isLoading,
    handleOnPress,
    className,
}: ButtonProps): JSX.Element {
    return (
        <TouchableOpacity
            onPress={handleOnPress}
            className={`${
                isLoading
                    ? "bg-neutral-400 border border-neutral-500"
                    : "bg-primary"
            } w-full py-5 btn ${className}`}
            disabled={isLoading}
        >
            <ThemedText
                content={content}
                className={`${
                    isLoading ? "text-neutral-700" : "text-white"
                } font-medium text-xl`}
            />
        </TouchableOpacity>
    );
}
