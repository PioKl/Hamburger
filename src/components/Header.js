import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../style/Header.scss';

const Header = () => {
    const { isLight, light, dark, toggleTheme } = useContext(ThemeContext);
    const theme = isLight ? light : dark;

    const darkMode = `
    body { background-color: black; color: white }
    .header:hover {background-color: yellow;}
    `;



    /*     const newStyle = {
            backgroundColor: theme.bg,
            header__primary: 
        } */

    return (
        <>
            {isLight ? null : <style>{darkMode}</style>}
            <header className="header" style={{}}>
                <h1 className="header__primary">Burger Creator</h1>
                <button onClick={toggleTheme}>Change Theme</button>
            </header>
        </>
    );
}

export default Header;