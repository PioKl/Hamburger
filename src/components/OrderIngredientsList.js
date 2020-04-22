import React, { useContext } from 'react';
import OrderIngredient from "./OrderIngredient";
import { OrderContext } from "../contexts/OrderContext";

const OrderIngredientsList = () => {
    const { orderIngredients } = useContext(OrderContext);
    return (
        <div>
            {orderIngredients.map((orderIngredient, index) => {
                return (<OrderIngredient key={index} orderIngredient={orderIngredient} />)
            })}
        </div>
    );
}

export default OrderIngredientsList;