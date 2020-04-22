import React, { useContext } from 'react';
import { OrderContext } from "../contexts/OrderContext";

const OrderIngredient = ({ orderIngredient }) => {
    const { removeIngredientFromOrder } = useContext(OrderContext);

    const handleDeleteIngredient = () => {
        removeIngredientFromOrder(orderIngredient.id)
    }
    return (
        <>
            {/* <div className={`orderIngredient orderIngredient-${orderIngredient.id}`}></div> */}
            <button className={`orderIngredient orderIngredient-${orderIngredient.id}`} onClick={handleDeleteIngredient}>
                <p>{orderIngredient.name}</p>
                <p>{orderIngredient.prize}</p>
            </button>
        </>

    );
}

export default OrderIngredient;