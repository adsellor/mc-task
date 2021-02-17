import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountDetailsPage from '../screens/AccountDetails/AccountDetailsPage';

const Stack = createStackNavigator();

const AccountDetailsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Account Details" component={AccountDetailsPage} />
        </Stack.Navigator>
    )
}

export default AccountDetailsStack;
