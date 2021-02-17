import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import avatarPickerStyles from "./avatarPickerStyles";

const AvatarPicker = () => {
  const [image, setImage] = useState<string | null>(null);

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

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      {
        <Image
          source={{
            uri: image ?? "https://cdn.onlinewebfonts.com/svg/img_336524.png  ",
          }}
          style={avatarPickerStyles.image}
        />
      }
    </TouchableOpacity>
  );
};

export default AvatarPicker;
