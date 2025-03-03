import {createContext, useEffect} from "react";
import {useSelector} from "react-redux";
import {selectTheme, Theme} from "@store/appSlice.ts";

interface ThemeContextType {
    theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const ThemeProvider = ({children}: { children: React.ReactNode }) => {

    const theme: Theme = useSelector(selectTheme);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches ? "dark" : "light";

            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;