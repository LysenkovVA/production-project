import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { Theme } from "../../../const/theme";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localstorage";

interface UseThemeResult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.ORANGE;
                break;
            case Theme.ORANGE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
        saveAction?.(newTheme);

        // Если повесить тему на body не будет возни с порталами и переопределениями стилей
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
