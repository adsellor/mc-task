import { EmployeeResponseModel } from "../api/responseTypes";
import { AccountDetailsProvider } from "../providers/providerTypes";

export enum DetailsActionType {
  SetStep = "SET_STEP",
  SetFirstDetails = "SET_FIRST_DETAILS",
  SetSecondDetails = "SET_SECOND_DETAILS",
}

export enum AuthActionType {
  SetAuth = "SET_AUTH"
}

export interface Action {
  type: string;
}

export enum EmployeesActionType {
  SetSelectedEmployees = "SET_SELECTED_EMPLOYEES",
}

export interface SetStepAction extends Action {
  payload: {
    step: AccountDetailsProvider.Steps;
  };
}

export interface SetFirstDetails extends Action {
  payload: {
    firstDetails: AccountDetailsProvider.FirstStepDetails;
  };
}

export interface SetSecondDetails extends Action {
  payload: {
    secondDetails: AccountDetailsProvider.SecondStepDetails;
  };
}

export interface SetSelectedEmployeesAction extends Action {
  payload: {
    employeesDetails: EmployeeResponseModel[];
  };
}

export interface SetAuthAction extends Action {
  payload: {
    isSignedIn: boolean
  }
} 
