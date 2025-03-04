import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import {setLocale} from "@store/appSlice.ts";
import {button} from "@style/button.ts";

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
            className={button({variant: "secondary"})}
        >
            <option value="en">🇬🇧 English</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="fr">🇫🇷 Français</option>
        </select>
    );
}

export default LocaleButton;