import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AccountDetailsStack from "./navigation/AccountDetailsStack";
import { getPersonalData } from "./utils/storage";
import ProfileStack from "./navigation/ProfileStack";
import { AuthContext } from "./providers/AuthProvider";

const Screens = () => {
  const { isSignedIn } = useContext(AuthContext); 

  return (
    <NavigationContainer>
      {isSignedIn ? <ProfileStack /> : <AccountDetailsStack />}
    </NavigationContainer>
  );
};

export default Screens;
