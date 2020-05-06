import React, { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import { OrderContext } from "../contexts/OrderContext";
import { ConfirmationContext } from "../contexts/ConfirmationContext";
import '../style/OrderIngredient.scss';

const OrderIngredient = ({ orderIngredient }) => {
    const { isLanguageChange, eng, pl } = useContext(LanguageContext);
    const { removeIngredientFromOrder } = useContext(OrderContext);
    const { showConfirmation } = useContext(ConfirmationContext);

    const handleDeleteIngredient = () => {
        removeIngredientFromOrder(orderIngredient.id)
    }
    return (
        <>
            {/*ten warunek (showConfirmation ? true : false) jest użyty w celu wyłączenia możliwości odejmowania składników z listy dodanych
        kiedy wyskoczyło okienko finalizujące zamówienie, czyli czy użytkownik chce zamówić, czy nie
        */}
            <button disabled={showConfirmation ? true : false} title={isLanguageChange ? `${eng[orderIngredient.name]}` : `${pl[orderIngredient.name]}`} className={`ingredient ingredient--${orderIngredient.name} orderIngredient orderIngredient-${orderIngredient.id}`} onClick={handleDeleteIngredient}>
            </button>
        </>

    );
}

export default OrderIngredient;