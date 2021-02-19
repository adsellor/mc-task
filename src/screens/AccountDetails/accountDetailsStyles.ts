import { StyleSheet } from "react-native";
import { secondaryColor } from "../../consts/colors";

const accountDetailsStyles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "75%",
  },
  infoText: {
    color: secondaryColor,
    fontSize: 22,
    textAlign: "center",
  },
  employeeListWrapper: {
    height: "70%",
    justifyContent: "center",
  },
});

export default accountDetailsStyles;
