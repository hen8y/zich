import { useState } from "react";
import { Switch } from "react-native";

export default function ToggleInput({
    handleToggle,
}: {
    handleToggle: () => void;
}): JSX.Element {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
        handleToggle();
    };

    return (
        <Switch
            trackColor={{ false: "#e5e7eb", true: "#3b82f6" }}
            thumbColor={isEnabled ? "#ffffff" : "#f3f4f6"}
            ios_backgroundColor="#e5e7eb"
            onValueChange={toggleSwitch}
            value={isEnabled}
            className="h-9"
        />
    );
}
