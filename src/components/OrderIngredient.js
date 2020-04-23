import React, { useContext } from 'react';
import { OrderContext } from "../contexts/OrderContext";
//import '../style/Ingredient.scss';

const OrderIngredient = ({ orderIngredient }) => {
    const { removeIngredientFromOrder } = useContext(OrderContext);

    const handleDeleteIngredient = () => {
        removeIngredientFromOrder(orderIngredient.id)
    }
    return (
        <>
            {/* <div className={`orderIngredient orderIngredient-${orderIngredient.id}`}></div> */}
            <button className={`ingredient ingredient-${orderIngredient.name} orderIngredient orderIngredient-${orderIngredient.id}`} onClick={handleDeleteIngredient}>
                {/*                 <p>{orderIngredient.name}</p>
                <p>{orderIngredient.prize}</p> */}
            </button>
        </>

    );
}

export default OrderIngredient;