import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import store from "@store/store.ts";
import I18NextHttpBackend from "i18next-http-backend";

i18n
    .use(I18NextHttpBackend)
    .use(initReactI18next)
    .init({
        lng: store.getState().app.locale, // Standard-Sprache
        fallbackLng: "en",
        ns: [],
        defaultNS: 'app',
        interpolation: {escapeValue: false},
        backend: {
            loadPath: "src/{{ns}}/i18n/{{lng}}.json",
        },
    });


export default i18n;
