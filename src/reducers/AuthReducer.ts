import { Action, AuthActionType, SetAuthAction } from "./reducerTypes";

const isSetSelectedEmployeesAction = (
  action: Action
): action is SetAuthAction => {
  return action.type === AuthActionType.SetAuth;
};

const authReducer = (isSignedIn: boolean, action: Action): boolean => {
  if (isSetSelectedEmployeesAction(action)) {
    return action.payload.isSignedIn;
  }

  return isSignedIn;
};

export default authReducer;
