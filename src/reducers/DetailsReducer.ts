import { AccountDetailsProvider } from "../providers/providerTypes";
import {
  DetailsActionType,
  SetFirstDetails,
  SetSecondDetails,
  SetStepAction,
  Action
} from "./reducerTypes";

const isSetStepAction = (action: Action): action is SetStepAction => {
  return action.type === DetailsActionType.SetStep;
};

const isSetFirstDetailsAction = (action: Action): action is SetFirstDetails => {
  return action.type === DetailsActionType.SetFirstDetails;
};

const isSetSecondDetailsAction = (
  action: Action
): action is SetSecondDetails => {
  return action.type === DetailsActionType.SetSecondDetails;
};

const deteailsReudcer = (
  details: AccountDetailsProvider.ContextState,
  action: Action
): AccountDetailsProvider.ContextState => {
  if (isSetStepAction(action)) {
    return {
      ...details,
      step: action.payload.step,
    };
  }
  if (isSetFirstDetailsAction(action)) {
    return {
      ...details,
      firstStepDetails: action.payload.firstDetails,
    };
  }
  if (isSetSecondDetailsAction(action)) {
    return {
      ...details,
      secondStepDetails: action.payload.secondDetails,
    };
  }
  return details;
}

export default deteailsReudcer;

