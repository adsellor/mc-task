import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import { primaryColor } from '../../consts/colors';

import { IButtonProps } from './button-types';
import createButtonStyles from './buttonStyles';


const Button = ({color, titleColor, isLoading, children,  ...otherProps}: IButtonProps) => {
	const buttonStyles = createButtonStyles({color, titleColor});

	return (
		<TouchableOpacity style={buttonStyles.button} {...otherProps}>
	        	{isLoading ? (
          			<ActivityIndicator color={primaryColor} />
        		) : (
          			<Text style={buttonStyles.buttonText}>{children}</Text>
        		)}
		</TouchableOpacity>
	)
}

export default Button;
