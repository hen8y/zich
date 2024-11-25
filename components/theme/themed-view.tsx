import { View, ViewProps } from "react-native";
import { Dispatch, SetStateAction } from "react";
import Spinner from "react-native-loading-spinner-overlay";
type ThemedViewProps = ViewProps & {
    className?: string;
    isLoading?: boolean;
    setIsLoading?: Dispatch<SetStateAction<boolean>>;
};

export function ThemedView({
    className,
    isLoading,
    setIsLoading,
    ...props
}: ThemedViewProps): JSX.Element {
    return (
        <View className="container justify-center items-center">
            <Spinner
                visible={isLoading}
                textStyle={{ color: "#fff" }}
                overlayColor="rgba(0, 0, 0, 0.5)"
            />
            <View className={`container ${className}`} {...props} />
        </View>
    );
}
