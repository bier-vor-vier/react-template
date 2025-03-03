import {useTranslation} from "react-i18next";
import i18next from "i18next";


export const useFeatureTranslation = (feature: string) => {
    const name = `features/${feature}`;
    i18next.loadNamespaces(name).then();
    const {t} = useTranslation(name);
    return t;
}
