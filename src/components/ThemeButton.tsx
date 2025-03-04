import {useDispatch, useSelector} from "react-redux";
import {selectTheme, setTheme} from "@store/appSlice.ts";
import {Moon, Sun} from "lucide-react";
import {button} from "@style/button.ts";

const ThemeButton = () => {

    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch(setTheme(theme === "light" ? "dark" : "light"));
    };

    return (
        <button
            onClick={() => toggleTheme()}
            className={button({variant: "rounded"})}
        >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
};


export default ThemeButton;