import {useEffect} from "react";
import {useSelector} from "react-redux";
import i18n from "@store/i18n.ts";
import {selectLocale} from "@store/appSlice.ts";

const LanguageUpdater = () => {
    const locale = useSelector(selectLocale);
    useEffect(() => {
        i18n.changeLanguage(locale).then(() => {
            console.log(`🌍 Sprache geändert: ${locale}`);
        });
    }, [locale]);
    return null;
};

export default LanguageUpdater;
