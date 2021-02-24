import React from "react";
import { View, Text, TouchableOpacityProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import createListItemStyles from "./listItemStyles";

export interface ListItemProps extends TouchableOpacityProps {
  isSelected: boolean;
  name: string;
  lastName: string;
  department: string;
  gender?: string;
  jobTitle: string;
  country?: string;
  city?: string;
  email?: string;
  departmentColor?: string;
  jobTitleColor?: string;
  countryColor?: string;
}

const ListItem = ({
  isSelected,
  name,
  lastName,
  department,
  gender,
  jobTitle,
  country,
  city,
  email,
  ...opacityProps
}: ListItemProps) => {
  const styles = createListItemStyles({ isSelected });

  return (
    <TouchableOpacity {...opacityProps} > 
      <View style={styles.listItemWrapper}>
        <View style={styles.mainInfoWrapper}>
          <Text style={styles.nameText}>{`${name} ${lastName}`}</Text>
          <Text style={styles.genderText}>{gender}</Text>
        </View>
        <Text style={styles.genderText}>{email}</Text>
        <View>
          <Text style={styles.departmentText}>{department}</Text>
          <Text style={styles.jobTitleText}>{jobTitle}</Text>
        </View>
          <Text style={styles.countryText}>{`${city}, ${country}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ListItem);
