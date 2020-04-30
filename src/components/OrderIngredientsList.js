import React, { useContext } from 'react';
import OrderIngredient from "./OrderIngredient";
import { OrderContext } from "../contexts/OrderContext";

const OrderIngredientsList = () => {
    const { orderIngredients } = useContext(OrderContext);
    return (
        <>
            {/* <div className="orderIngredients"> */}
            {/* te placeholders są w celu, aby była ramka jak jeszcze użytkownik nie wybrał odpowiedniego składnika
            są one już dodane ponieważ składniki do wyświetlenia pochodzą z map i button istnieje wyłącznie wtedy, gdy użytkownik dodał jakiś składnik. Dlatego już są placeholdery, bo te buttony jeszcze nie istnieją, istnieją po map i dodaniu
             */}
            <div className="placeHolder placeHolder-0"></div>
            <div className="placeHolder placeHolder-1"></div>
            <div className="placeHolder placeHolder-2"></div>
            <div className="placeHolder placeHolder-3"></div>
            <div className="placeHolder placeHolder-4"></div>
            <div className="placeHolder placeHolder-5"></div>
            {orderIngredients.map((orderIngredient, index) => {
                return (<OrderIngredient key={index} orderIngredient={orderIngredient} />)
            })}
            {/* </div> */}
        </>
    );
}

export default OrderIngredientsList;