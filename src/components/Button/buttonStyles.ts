import { StyleSheet } from "react-native";

import {
  eggshellWhite,
  primaryColor,
  secondaryColor,
} from "../../consts/colors";

import { IButtonProps } from "./button-types";

const createButtonStyles = ({ color, titleColor }: Partial<IButtonProps>) =>
  StyleSheet.create({
    button: {
      backgroundColor: color ?? primaryColor,
      width: "100%",
      height: "7%",
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: titleColor ?? "white",
      fontSize: 20,
      fontWeight: "bold",
    },
  });

export default createButtonStyles;
