import { TouchableOpacityProps } from 'react-native';

export interface IButtonProps extends TouchableOpacityProps {
	children: React.RecatNode,
	color?: string,
	titleColor?: string,
	isLoading?: boolean,
}
	
