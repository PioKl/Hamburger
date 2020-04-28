import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {

    const [isLight, setIsLight] = useState(true);

    /*     const [light] = useState(
            { bg: "black" },
        ); */

    const toggleTheme = () => {
        setIsLight(!isLight);
    }

    return (
        <ThemeContextProvider value={{ toggleTheme }}>
            {props.children}
        </ThemeContextProvider>
    )
}