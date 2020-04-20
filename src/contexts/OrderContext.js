import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

let nextIngredient = 0;

const OrderContextProvider = (props) => {

    const [orderIngredients, setOrderIngredients] = useState([]);

    const addIngredientToOrder = (name, prize) => {
        //max 6 składników
        if (nextIngredient <= 5) {
            setOrderIngredients([...orderIngredients, { name, prize, id: nextIngredient++ }]);
        } else {
            return
        }
    }

    const removeIngredientFromOrder = (id) => {
        setOrderIngredients(orderIngredients.filter(orderIngredient => orderIngredient.id !== id))
        //Usuwaj id z nextIngredient, po usunięciu składnika, bo jeśli usunę wszystkie sześć to nie będę mógł ich dodać ze względu na warunek w addIngredientToOrder (nextIngredient <=5)
        if (nextIngredient > 0) {
            nextIngredient--;
        }
    }

    console.log(orderIngredients);

    return (
        <OrderContext.Provider value={{ orderIngredients, addIngredientToOrder, removeIngredientFromOrder }}>
            {props.children}
        </OrderContext.Provider>
    )

}

export default OrderContextProvider;