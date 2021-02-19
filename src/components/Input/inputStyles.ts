import { StyleSheet } from 'react-native';
import { primaryColor } from '../../consts/colors';

const inputStyles =  StyleSheet.create({
  inputStyle: {
    padding: "5%",
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: primaryColor,
    borderRadius: 30,
    height: 50,
    width: "100%",
    marginTop: 10
  }
});

export default inputStyles;
