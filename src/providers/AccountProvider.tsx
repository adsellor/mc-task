import React, {
  createContext,
  useState,
  FC,
  useReducer,
  Dispatch,
} from "react";
import deteailsReudcer from "../reducers/DetailsReducer";

import { AccountDetailsProvider } from "./providerTypes";

import {
  SetFirstDetails,
  SetSecondDetails,
  SetStepAction,
} from "../reducers/reducerTypes";
import { getPersonalData } from "../utils/storage";

const defaultState: AccountDetailsProvider.ContextState = {
  step: AccountDetailsProvider.Steps.FirstStep,
  totalSteps: 3,
};

export const AccountDetailsContext = createContext<{
  details: AccountDetailsProvider.ContextState;
  dispatch: Dispatch<SetStepAction | SetFirstDetails | SetSecondDetails>;
}>({ details: defaultState, dispatch: () => null });

const AccountProvider: FC = ({ children }) => {
  const [details, dispatch] = useReducer(deteailsReudcer, defaultState);

  return (
    <AccountDetailsContext.Provider value={{details, dispatch}}>
      {children}
    </AccountDetailsContext.Provider>
  );
};

export default AccountProvider;
