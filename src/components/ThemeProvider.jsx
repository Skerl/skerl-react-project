import React, {createContext, useEffect} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext({});

export default function ThemeProvider( {children } ) {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

