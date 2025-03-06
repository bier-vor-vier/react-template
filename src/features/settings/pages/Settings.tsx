import {useFeatureTranslation} from "@store/useFeatureTranslation.ts";
import {
     setItems,
    Setting,
    updateItem,
    useSettingsDispatch,
    useSettingsSelector
} from "../store/settingsSlice.ts";
import {Settings as SettingIcon} from "lucide-react";
import * as React from "react";


const SettingValueV0 = ({ setting }: { setting: Setting }) => {
    console.log("render v0", setting);
    return <li>{setting.name}: {setting.value}</li>;
};

const SettingValueV1 = React.memo(({ setting }: { setting: Setting }) => {
    console.log("render v1", setting);
    return <li>{setting.name}: {setting.value}</li>;
});

const SettingValueV2 = React.memo(({ setting }: { setting: Setting }) => {
    console.log("render v2", setting);
    return <li>{setting.name}: {setting.value}</li>;
}, (prev, next) => prev.setting === next.setting);

const SettingValueV3 = React.memo(({ name }: { name: string }) => {
    const setting = useSettingsSelector(x => x.settings.settings.find(x => x.name === name));
    console.log("render v3", setting);
    return <li>{setting?.name}: {setting?.value}</li>;
});

const Settings = () => {
    const t = useFeatureTranslation("settings");
    const settings = useSettingsSelector(x => x.settings.settings);
    const dispatch = useSettingsDispatch();


    console.log("render");

    return <div className="flex gap-1 items-center">
        <SettingIcon size={24}/>
        <span>{t("title")}</span>

        <button onClick={()=> dispatch(updateItem({id: 1, value: "HAHA" + Date.now() }))}>+</button>
        <button onClick={()=> dispatch(setItems([
            { id: 1, name: "Setting1", value: "HAHA" },
            { id: 2, name: "Setting2", value: "HAHA" },
            { id: 3, name: "Setting3", value: "HAHA" },
            { id: 4, name: "Setting4", value: "HAHA" },
        ]))}>reset</button>


        <div className={"flex flex-col gap-1"}>

        <ul>
            {settings.map(item => (
                <SettingValueV0 key={item.name} setting={item} />
            ))}
        </ul>

        <ul>
            {settings.map(item => (
                <SettingValueV1 key={item.name} setting={item} />
            ))}
        </ul>

        <ul>
            {settings.map(item => (
                <SettingValueV2 key={item.name} setting={item} />
            ))}
        </ul>

        <ul>
            {settings.map(item => (
                <SettingValueV3 key={item.name} name={item.name} />
            ))}
        </ul>

        </div>
    </div>;
};

export default React.memo(Settings);