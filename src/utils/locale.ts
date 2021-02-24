import i18n from 'i18n-js';
import en from "../locales/en";
import de from "../locales/de";

console.log(en)
i18n.translations = {
  "en-US": en,
  de
}

i18n.fallbacks = true;

export default i18n;
