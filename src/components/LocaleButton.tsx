import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {setLocale} from "@store/appSlice.ts";

const LocaleButton = () => {

    const { i18n } = useTranslation();
    const dispatch = useDispatch();

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLang = event.target.value;
        dispatch(setLocale(selectedLang));
    };

    return (
        <select
            onChange={changeLanguage}
            value={i18n.language}
            className="p-2 border rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
        >
            <option value="en">🇬🇧 English</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="fr">🇫🇷 Français</option>
        </select>
    );
}

export default LocaleButton;