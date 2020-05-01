import React, { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import { OrderContext } from "../contexts/OrderContext";
import "../style/FinalizeOrder.scss";

const FinalizeOrder = () => {
    const { isLanguageChange, eng, pl } = useContext(LanguageContext);
    const { resetOrder } = useContext(OrderContext);
    return (
        <>
            {/* Confirm customowy lepiej zrobić, coś podobnego robiłem w rock paper scissors */}
            <button title={isLanguageChange ? eng.order : pl.order} className="burger-summary__order button-order" onClick={() => window.confirm(`${isLanguageChange ? "Are you sure?" : "Jesteś pewien?"}`) ? resetOrder() : null}>{isLanguageChange ? eng.order : pl.order}</button>
            <button title={isLanguageChange ? eng.reset : pl.reset} className="burger-summary__reset button-reset" onClick={() => resetOrder()}>X</button>
        </>
    );
}

export default FinalizeOrder;