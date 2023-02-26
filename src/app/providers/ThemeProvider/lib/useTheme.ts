import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        // Если повесить тему на body не будет возни с порталами и переопределениями стилей
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme
    };
}
