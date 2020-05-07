import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { OrderContext } from "../contexts/OrderContext";
import { ConfirmationContext } from "../contexts/ConfirmationContext";
import { ThemeContext } from '../contexts/ThemeContext';
import "../style/ConfirmOrder.scss";
const ConfirmOrder = () => {
    const { resetOrder } = useContext(OrderContext);
    const { showConfirmation, setShowConfirmation } = useContext(ConfirmationContext);
    const { isLanguageChange } = useContext(LanguageContext);
    const { isDark, dark } = useContext(ThemeContext);
    const handleConfirm = () => {
        resetOrder();
        setShowConfirmation(false)
    }
    const handleCancel = () => {
        setShowConfirmation(false)
    }

    const confirmationStyle = `.button-reset {visibility: hidden}
    .App{background-color: ${isDark ? "rgba(255, 138, 4, 0.196)" : dark.bgConfirm}}
    .burger-alert {background-color:${isDark ? null : "rgba(139, 98, 98)"}}
    .burger-alert__button--confirm {background-color: ${isDark ? null : "#47ca47"}}
    .burger-alert__button--cancel {background-color: ${isDark ? null : "rgb(223, 16, 23)"}}
    `;
    return (
        <>
            {showConfirmation ? <style>{confirmationStyle}</style> : null}
            <div className="burger-alert">
                <div className="burger-alert__inform">
                    <h1 className="burger-alert__primary">{isLanguageChange ? "Confirm order?" : "Potwierdzić zamówienie?"}</h1>
                </div>
                <div className="burger-alert__confirmation">
                    <button className="burger-alert__button burger-alert__button--confirm" onClick={handleConfirm}>{isLanguageChange ? "Yes" : "Tak"}</button>
                    <button className="burger-alert__button burger-alert__button--cancel" onClick={handleCancel}>{isLanguageChange ? "Cancel" : "Anuluj"}</button>
                </div>
            </div>
        </>
    );
}

export default ConfirmOrder;