import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {

    const [isLight, setIsLight] = useState(true);

    const [light] = useState(
        { bg: "red" },
    );

    const [dark] = useState(
        { bg: "black" },
    )

    const toggleTheme = () => {
        setIsLight(!isLight);
    }

    return (
        <ThemeContext.Provider value={{ isLight, light, dark, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;