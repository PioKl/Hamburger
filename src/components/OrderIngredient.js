import React, { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import { OrderContext } from "../contexts/OrderContext";
import '../style/OrderIngredient.scss';

const OrderIngredient = ({ orderIngredient }) => {
    const { isLanguageChange, eng, pl } = useContext(LanguageContext);
    const { removeIngredientFromOrder } = useContext(OrderContext);

    const handleDeleteIngredient = () => {
        removeIngredientFromOrder(orderIngredient.id)
    }
    return (
        <>
            <button title={isLanguageChange ? `${eng[orderIngredient.name]}` : `${pl[orderIngredient.name]}`} className={`ingredient ingredient--${orderIngredient.name} orderIngredient orderIngredient-${orderIngredient.id}`} onClick={handleDeleteIngredient}>
            </button>
        </>

    );
}

export default OrderIngredient;