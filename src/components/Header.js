import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../style/Header.scss';

const Header = () => {
    const { isDark, dark, toggleTheme } = useContext(ThemeContext);
    const theme = dark;

    //#FFFDD0
    const darkMode = `
    .App { background-color: ${theme.bg}; color: ${theme.color} }
    .header, .footer {box-shadow: 0 0 12rem .9rem rgb(255, 255, 225, 0.1)}
    .header__mode {box-shadow: 0 0 .1rem .2rem rgb(255, 255, 255, 0.1)}
    .placeHolder { background-color: rgba(255, 253, 208, 0.201)}
    .orderIngredient {background-color: rgba(255, 255, 0, 0.723)}
    .orderIngredient:hover {border: .6rem solid #CC0000}
    .btn-chooseIngredient {background-color: #801336;}
    .btn-chooseIngredient:hover {border: .5rem solid #158000}
    .btn-chooseIngredient:active {border: .7rem solid #158000}
    .button-order {background-color: #158000}
    @keyframes changingBoxShadow {
        from {
            box-shadow: 0 0 .1rem .2rem #158000;
        }
    
        to {
            box-shadow: 0 0 .1rem .2rem #1A9E00;
        }
    `;



    /*     const newStyle = {
            backgroundColor: theme.bg,
            header__primary: 
        } */

    return (
        <>
            {isDark ? null : <style>{darkMode}</style>}
            <header className="header" style={{}}>
                <h1 className="header__primary">Burger Creator</h1>
                <div className="header__changeMode">
                    <input className="header__change-input" type="checkbox" name="mode" id="mode" onChange={toggleTheme} />
                    <label className="header__mode" htmlFor="mode">
                        <span className="header__sun"></span>
                        <span className="header__moon"></span>
                        <span className="header__slider"></span>
                    </label>
                </div>
                {/* <button onClick={toggleTheme}>Change Theme</button> */}
            </header>
        </>
    );
}

export default Header;