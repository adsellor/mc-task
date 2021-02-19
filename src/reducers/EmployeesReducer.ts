import { EmployeeResponseModel } from "../api/responseTypes";
import { Action, EmployeesActionType, SetSelectedEmployeesAction } from "./reducerTypes";

const isSetSelectedEmployeesAction = (action: Action): action is SetSelectedEmployeesAction => {
  return action.type === EmployeesActionType.SetSelectedEmployees
};


const employeesReducer = (
  employess: EmployeeResponseModel[],
  action: Action
): EmployeeResponseModel[] => {
  if (isSetSelectedEmployeesAction(action)) {
      return action.payload.employeesDetails
  }

  return employess
}

export default employeesReducer;
