import React from "react";

import { Text, TextInput, View } from "react-native";
import { InputProps } from "./input-types";

import inputStyles from "./inputStyles";

const Input = ({ ...inputProps }: InputProps) => {
  return <TextInput style={inputStyles.inputStyle} {...inputProps} />;
};

export default React.memo(Input);
