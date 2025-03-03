import {Settings as SettingIcon} from "lucide-react";
import {useFeatureTranslation} from "@store/useFeatureTranslation.ts";


const Settings = () => {
    const t = useFeatureTranslation("settings");
    return <div className="flex gap-1 items-center">
        <SettingIcon size={24}/>
        <span>{t("title")}</span>
    </div>;
};

export default Settings;