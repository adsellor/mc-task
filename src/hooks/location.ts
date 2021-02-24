import { useState } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";

const useLocation = () => {
  const [location, setLocation] = useState();

  const _getLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Location permission is needed to get current location");
      return null;
    }
    const location = await Location.getCurrentPositionAsync({});
  };
};
