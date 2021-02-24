import React, { createContext, Dispatch, useReducer, useEffect } from 'react';
import {locale} from 'expo-localization';

import en from '../locales/en'
import de from '../locales/de'

import localeReducer from '../reducers/LocaleReducer';
import { SetLocaleAction } from '../reducers/reducerTypes';
import i18n from '../utils/locale.ts';


const defaultLocale: string = locale;

export const LocalizaitonContext = createContext<{
	locale: string,
	dispatch: Dispatch<SetLocaleAction>
}>({
	locale:  defaultLocale,
	dispatch: () => null
})

const LocalizationProvider: React.FC = ({ children }) => {
	const [locale, dispatch]: [
		string, Dispatch<SetLocaleAction>] = useReducer(localeReducer, defaultLocale);

		useEffect(() => {
			i18n.locale = locale;
		}, [locale] )


	return (
		<LocalizaitonContext.Provider value={{ locale, dispatch}}>
			{children}
		</LocalizaitonContext.Provider>
	)
}

export default LocalizationProvider;

