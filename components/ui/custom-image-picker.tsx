import { useState } from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function CustomImagePicker({
    defaultImage,
}: {
    defaultImage: any;
}): JSX.Element {
    const [image, setImage] = useState<string>(defaultImage);

    const selectImage = async () => {
        const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert(
                "Permission Required",
                "You need to allow access to the photo library."
            );
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const selectedImage = result.assets[0].uri;
            setImage(selectedImage);
        }
    };

    return (
        <View className="center mt-5">
            <TouchableOpacity onPress={selectImage}>
                <Image
                    source={{ uri: image }}
                    className="size-16 rounded-full border border-neutral-300"
                />
            </TouchableOpacity>
        </View>
    );
}
