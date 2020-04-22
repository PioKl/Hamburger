import React, { useContext } from 'react';
import { OrderContext } from "../contexts/OrderContext";

const FinalizeOrder = () => {
    const { resetOrder } = useContext(OrderContext);
    return (
        <div>
            {/* Confirm customowy lepiej zrobić, coś podobnego robiłem w rock paper scissors */}
            <button onClick={() => window.confirm("Are you sure?") ? resetOrder() : null}>Zamów</button>
        </div>
    );
}

export default FinalizeOrder;