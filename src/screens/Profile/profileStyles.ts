import { StyleSheet } from "react-native";
import { primaryColor } from "../../consts/colors";

const profileStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  infoText: {
    fontSize: 28,
    color: primaryColor,
    textAlign: "center",
  },
  employeeListWrapper: {
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default profileStyles;
