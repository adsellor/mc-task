import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AccountDetailsStack from './navigation/AccountDetailsStack';


const Screens = () => {
    return (
        <NavigationContainer>
            <AccountDetailsStack />
        </NavigationContainer>
    ) 
}

export default Screens;
