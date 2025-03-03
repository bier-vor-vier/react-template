import {useTranslation} from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    return <h1 className="p-4">{t('home')}</h1>;
};
export default Home;