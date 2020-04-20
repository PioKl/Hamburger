import React, { useContext } from 'react';
import { OrderContext } from "../contexts/OrderContext";

const OrderIngredient = ({ orderIngredient }) => {
    const { removeIngredientFromOrder } = useContext(OrderContext);

    const handleDeleteIngredient = () => {
        removeIngredientFromOrder(orderIngredient.id)
    }
    return (
        <button onClick={handleDeleteIngredient}>
            <p>{orderIngredient.name}</p>
            <p>{orderIngredient.prize}</p>
        </button>
    );
}

export default OrderIngredient;