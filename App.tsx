import "react-native-gesture-handler";
import React from "react";

import Screens from "./src";
import EmployeesProvider from "./src/providers/EmployeesProvider";
import AccountProvider from "./src/providers/AccountProvider";
import AuthProvider from "./src/providers/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <AccountProvider>
        <EmployeesProvider>
          <Screens />
        </EmployeesProvider>
      </AccountProvider>
    </AuthProvider>
  );
}
