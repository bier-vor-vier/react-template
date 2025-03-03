import {AuthButton} from "../features/auth/components/AuthButton.tsx";
import ThemeButton from "@components/ThemeButton.tsx";
import {header} from "@style/layout.ts";
import LocaleButton from "@components/LocaleButton.tsx";
const Header = () => {
    return (
        <header className={header()}>
            <h1 className="text-xl font-semibold"></h1>
            <div className="flex-grow"></div>
            <LocaleButton />
            <ThemeButton />
            <AuthButton />
        </header>
    );
};

export default Header;
