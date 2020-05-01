import React, { useContext } from 'react';
import { OrderContext } from "../contexts/OrderContext";
import "../style/FinalizeOrder.scss";

const FinalizeOrder = () => {
    const { resetOrder } = useContext(OrderContext);
    return (
        <>
            {/* Confirm customowy lepiej zrobić, coś podobnego robiłem w rock paper scissors */}
            <button title="order" className="burger-summary__order button-order" onClick={() => window.confirm("Are you sure?") ? resetOrder() : null}>Zamów</button>
            <button title="reset order" className="burger-summary__reset button-reset" onClick={() => resetOrder()}>X</button>
        </>
    );
}

export default FinalizeOrder;