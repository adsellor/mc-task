import React, {
  createContext,
  useState,
  FC,
  useReducer,
  Dispatch,
  useEffect,
} from "react";

import { EmployeeResponseModel } from "../api/responseTypes";
import employeesReducer from "../reducers/EmployeesReducer";
import {
  EmployeesActionType,
  SetSelectedEmployeesAction,
} from "../reducers/reducerTypes";
import { getEmployeeData } from "../utils/storage";

const defaultState: EmployeeResponseModel[] = [];

export const EmployeesContext = createContext<{
  employees: EmployeeResponseModel[];
  dispatch: Dispatch<SetSelectedEmployeesAction>;
}>({
  employees: defaultState,
  dispatch: () => null,
});

const EmployeesProvider: FC = ({ children }) => {
  const [employees, dispatch]: [
    EmployeeResponseModel[],
    Dispatch<SetSelectedEmployeesAction>
  ] = useReducer(employeesReducer, defaultState);

  const bootstrapEmployeeData = async () => {
    const data = await getEmployeeData();
    if (data) {
      dispatch({
        type: EmployeesActionType.SetSelectedEmployees,
        payload: { employeesDetails: data },
      });
    }
  };

  useEffect(() => {
      bootstrapEmployeeData();
  }, []);

  return (
    <EmployeesContext.Provider value={{ employees, dispatch }}>
      {children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesProvider;
