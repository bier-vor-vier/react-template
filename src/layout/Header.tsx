import {AuthButton} from "../features/auth/components/AuthButton.tsx";
import ThemeButton from "@components/ThemeButton.tsx";
import {header} from "@style/layout.ts";
import LocaleButton from "@components/LocaleButton.tsx";
import {toggleSidebar} from "@store/appSlice.ts";
import {Menu} from "lucide-react";
import {useDispatch} from "react-redux";
import {button} from "@style/button.ts";
const Header = () => {
    const dispatch = useDispatch();
    return (
        <header className={header()}>
            {/* Toggle Button */}
            <button
                onClick={() => dispatch(toggleSidebar())}
                className={button({variant: "rounded"})}
            >
                <Menu size={20}/>
            </button>

            <h1 className="text-xl font-semibold"></h1>
            <div className="flex-grow"></div>
            <LocaleButton />
            <ThemeButton />
            <AuthButton />
        </header>
    );
};

export default Header;
