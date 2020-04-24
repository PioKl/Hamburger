import React, { useContext } from 'react';
import { OrderContext } from "../contexts/OrderContext";
import "../style/FinalizeOrder.scss";

const FinalizeOrder = () => {
    const { resetOrder } = useContext(OrderContext);
    return (
        <>
            {/* Confirm customowy lepiej zrobić, coś podobnego robiłem w rock paper scissors */}
            <button className="button-order" onClick={() => window.confirm("Are you sure?") ? resetOrder() : null}>Zamów</button>
        </>
    );
}

export default FinalizeOrder;