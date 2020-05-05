import React, { useContext } from 'react';
import "../style/Footer.scss";
import { LanguageContext } from '../contexts/LanguageContext';
const Footer = () => {
    const { isLanguageChange } = useContext(LanguageContext);
    return (
        <footer className="footer">
            <h1 className="footer__primary">{isLanguageChange ? "Made by Piotr Kłosowski" : "Autor: Piotr Kłosowski"}</h1>
        </footer>
    );
}

export default Footer;