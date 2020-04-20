import React, { useContext } from 'react';
import Ingredient from "./Ingredient";
import { IngredientsContext } from "../contexts/IngredientsContext";
import { OrderContext } from "../contexts/OrderContext";

const IngredientsList = () => {
    const { ingredients, maxOrder } = useContext(IngredientsContext);
    const { orderIngredients } = useContext(OrderContext);
    return (
        <div className="ingredients-list">
            <h3>Wybierz składniki</h3>
            <p>Pozostało: {maxOrder - orderIngredients.length}</p>
            {ingredients.map(ingredient => {
                return (<Ingredient ingredient={ingredient} key={ingredient.id} />);
                /* return <li key={ingredient.id}>{ingredient.name}</li> */
            })}
        </div>
    );
}

export default IngredientsList;