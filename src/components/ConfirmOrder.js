import React, { useContext } from 'react';
import { OrderContext } from "../contexts/OrderContext";
import { ConfirmationContext } from "../contexts/ConfirmationContext";
import "../style/ConfirmOrder.scss";
const ConfirmOrder = () => {
    const { resetOrder } = useContext(OrderContext);
    const { showConfirmation, setShowConfirmation } = useContext(ConfirmationContext);
    const handleConfirm = () => {
        resetOrder();
        setShowConfirmation(false)
    }
    const handleCancel = () => {
        setShowConfirmation(false)
    }
    const dis = `.button-reset {visibility: hidden}
    `;
    return (
        <>
            {showConfirmation ? <style>{dis}</style> : null}
            <div className="burger-alert">
                <div className="burger-alert__inform">
                    <h1 className="burger-alert__primary">Jesteś pewien?</h1>
                </div>
                <div className="burger-alert__confirmation">
                    <button className="burger-alert__button burger-alert__button--confirm" onClick={handleConfirm}>Tak</button>
                    <button className="burger-alert__button burger-alert__button--cancel" onClick={handleCancel}>Nie</button>
                </div>
            </div>
        </>
    );
}

export default ConfirmOrder;