import React, { createContext, useState } from 'react';

export const IngredientsContext = createContext();

const maxOrder = 6;

const IngredientsContextProvider = (props) => {
    const [ingredients] = useState([
        { name: "chicken", prize: 3, id: "1" },
        { name: "beef", prize: 5, id: "2" },
        { name: "bacon", prize: 2, id: "3" },
        { name: "cheese", prize: 2, id: "4" },
        { name: "lettuce", prize: 0.4, id: "5" },
        { name: "onion", prize: 0.2, id: "6" },
        { name: "tomato", prize: 0.5, id: "7" },
        { name: "cucumber", prize: 0.3, id: "8" },
        { name: "mushrooms", prize: 0.7, id: "9" },
        { name: "pepper", prize: 0.6, id: "10" },
    ]);
    /*     const [ingredientsPl, setIngredientsPL] = useState([
            { name: "kurczak", prize: "3", id: "1" },
            { name: "wołowina", prize: "5", id: "2" },
            { name: "ser", prize: "2", id: "3" },
            { name: "sałata", prize: "0.4", id: "4" },
            { name: "cebula", prize: "0.2", id: "5" },
            { name: "pomidor", prize: "0.5", id: "6" },
        ]); */

    return (
        <IngredientsContext.Provider value={{ ingredients, maxOrder }}>
            {props.children}
        </IngredientsContext.Provider>
    );
}

export default IngredientsContextProvider;