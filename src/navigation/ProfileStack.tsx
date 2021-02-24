import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePage from '../screens/Profile/ProfilePage';
import i18n from '../utils/locale.ts';


const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={i18n.t("profile")}component={ProfilePage} />
        </Stack.Navigator>
    )
}

export default ProfileStack;

