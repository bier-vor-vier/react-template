import {useDispatch, useSelector} from "react-redux";
import {selectTheme, setTheme} from "@store/appSlice.ts";
import {Moon, Sun} from "lucide-react";

const ThemeButton = () => {

    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch(setTheme(theme === "light" ? "dark" : "light"));
    };

    return (
        <button
            onClick={() => toggleTheme()}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
        >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
};


export default ThemeButton;