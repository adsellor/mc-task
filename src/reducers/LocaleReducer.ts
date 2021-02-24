import {SetLocaleActionType} from "./reducerTypes.ts";
import { Action, SetLocaleAction } from "./reducerTypes";


const isSetLocaleAction = (action: Action): action is SetLocaleAction => {
		return action.type === SetLocaleActionType.SetLocale;
}

const localeReducer = (
   locale: string,
   action: Action
): string => {
	if(isSetLocaleAction(action)) {
		return action.payload.locale
	}

	return locale;
}

export default localeReducer;

