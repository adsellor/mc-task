import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import avatarPickerStyles from "./avatarPickerStyles";
import { primaryColor } from "../../consts/colors";

interface AvatarPickerProps {
  onImagePick?: (uri: string) => void;
  photoUri?: string;
}

const AvatarPicker = ({ onImagePick, photoUri }: AvatarPickerProps) => {
  const [image, setImage] = useState<string>();

  const _grantPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }
  };

  const pickImage = async () => {
    await _grantPermission();

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && onImagePick) {
      setImage(result.uri);
      onImagePick(result.uri);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      {image || photoUri ? (
        <Image
          source={{
            uri: photoUri || image,
          }}
          style={avatarPickerStyles.image}
        />
      ) : (
        <Ionicons size={200} color={primaryColor} name="image" />
      )}
    </TouchableOpacity>
  );
};

export default AvatarPicker;
