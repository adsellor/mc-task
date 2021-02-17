import { DefaultTheme } from '@react-navigation/native';
import { eggshellWhite, primaryColor, eggshellWhite} from '../consts/colors.ts';

const PrimaryTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primaryColor,
    secondary: secondaryColor,
    background: eggshellWhite
  },
};



export default PrimaryTheme;

