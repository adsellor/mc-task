import { StyleSheet } from 'react-native';
import { primaryColor } from '../../consts/colors';

const inputStyles =  StyleSheet.create({
  inputStyle: {
    padding: "5%",
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: primaryColor,
    borderRadius: 30,
    height: "6%",
    width: "100%",
  }
});

export default inputStyles;
