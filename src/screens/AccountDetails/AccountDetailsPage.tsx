import React, { useState } from "react";
import {
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";

import AvatarPicker from "../../components/AvatarPicker";
import Button from "../../components/Button";
import Input from "../../components/Input";

import accountDetailsStyles from "./accountDetailsStyles";

const AccountDetailsPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");

  return (
    <View style={accountDetailsStyles.mainWrapper}>
      <View style={accountDetailsStyles.container}>
        <AvatarPicker />
        <Text>Hello there</Text>
        <Input
          onChangeText={setFirstName}
          value={firstName}
          placeholder="First Name"
        />
        <Input onChangeText={setLastName} placeholder="Last Name" />
        <Input value={location} placeholder="Current Location" />
        <Button>Next step</Button>
      </View>
    </View>
  );
};

export default AccountDetailsPage;
