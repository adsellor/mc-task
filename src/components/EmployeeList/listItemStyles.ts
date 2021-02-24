import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../consts/colors";

import { ListItemProps } from "./ListItem";

const createListItemStyles = ({ isSelected, jobTitleColor, departmentColor, countryColor }: Partial<ListItemProps>) =>
  StyleSheet.create({
    listItemWrapper: {
      backgroundColor: isSelected ? primaryColor : "white",
      borderRadius: 20,
      width: 280,
      height: 150,
      opacity: 0.8,
      alignItems: 'flex-start',
      marginTop: 10,
      marginBottom: 10,
      padding: 15
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    departmentText: {
        fontSize: 18,
        fontWeight: "500",
        color: departmentColor ?? secondaryColor,
    },
    jobTitleText: {
        fontSize: 18,
        fontWeight: "500",
        color: jobTitleColor ?? secondaryColor,
    },
    countryText: {
        fontSize: 18,
        fontWeight: "500",
        color: countryColor ?? secondaryColor,
    },
    genderText: {
        fontSize: 18,
        fontWeight: "500",
        color: secondaryColor
    },
    mainInfoWrapper: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        flexDirection: 'row'
    }
  });

export default createListItemStyles;
