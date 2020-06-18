import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en.json"

const resources = {
    en: {
        translation: translationEN
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: '.', // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        },
    });

export default i18n;
