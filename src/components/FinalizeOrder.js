import React, { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import { OrderContext } from "../contexts/OrderContext";
import { ConfirmationContext } from "../contexts/ConfirmationContext";
import "../style/FinalizeOrder.scss";
import ConfirmOrder from './ConfirmOrder';

const FinalizeOrder = () => {
    const { isLanguageChange, eng, pl } = useContext(LanguageContext);
    const { resetOrder } = useContext(OrderContext);
    const { showConfirmation, showConfirmationWindow } = useContext(ConfirmationContext);
    return (
        <>
            {/* To jest confirm zrobiony za pomocą window, wtedy nie trzeba tworzyć kontekstów, styli, darkMode, itp, ale nie można go modyfikować (dodałem customowy confirm, ale jakbym chciał się zrezygnować z niego to muszę usunąc wszystko co wiąże się z ConfirmOrder, ConfirmationContext, zmiany w darkMode w Header, w ThemeContext, App) */}
            {/*             <button title={isLanguageChange ? eng.order : pl.order} className="burger-summary__order button-order" onClick={() => window.confirm(`${isLanguageChange ? "Are you sure?" : "Jesteś pewien?"}`) ? resetOrder() : null}>{isLanguageChange ? eng.order : pl.order}</button>
            <button title={isLanguageChange ? eng.reset : pl.reset} className="burger-summary__reset button-reset" onClick={() => resetOrder()}>X</button> */}
            <button disabled={showConfirmation ? true : false} title={isLanguageChange ? eng.order : pl.order} className="burger-summary__order button-order" onClick={() => showConfirmationWindow()}>{isLanguageChange ? eng.order : pl.order}</button>
            <button title={isLanguageChange ? eng.reset : pl.reset} className="burger-summary__reset button-reset" onClick={() => resetOrder()}>X</button>
            {showConfirmation ? <ConfirmOrder /> : null}
        </>
    );
}

export default FinalizeOrder;