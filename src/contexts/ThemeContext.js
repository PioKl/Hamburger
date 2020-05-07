import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {

    const [isDark, setIsDark] = useState(true); //tutaj mogłem zacząć od false bo domyślny to styl light, tak na przyszłość

    const [dark] = useState(
        {
            bg: "#121212f6",
            color: "rgba(255, 255, 255, 0.836)",
            bgConfirm: "rgb(56,56,56)",
        }
    )

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <ThemeContext.Provider value={{ isDark, dark, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;