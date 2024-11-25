import { Text, type TextProps } from "react-native";

type ThemedTextProps = TextProps & {
    className?: string;
    content?: string
};

export function ThemedText({ className, content, ...props }: ThemedTextProps) {
    const hasTextSize = className
        ?.split(" ")
        .some((c) =>
            /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)$/.test(c)
        );
    return (
        <Text
            className={`text-neutral-800 ${
                hasTextSize ? hasTextSize : "text-lg"
            } ${className}`}
            {...(content ? { children: content } : props)}
        />
    );
}
