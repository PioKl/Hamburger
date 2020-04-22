import React, { useContext } from 'react';
import Ingredient from "./Ingredient";
import { IngredientsContext } from "../contexts/IngredientsContext";
import { OrderContext } from "../contexts/OrderContext";
import '../style/IngredientsList.scss';

const IngredientsList = () => {
    const { ingredients, maxOrder } = useContext(IngredientsContext);
    const { orderIngredients } = useContext(OrderContext);
    return (
        <div className="ingredients-panel">
            <div className="ingredientsLeft">
                <h3>Wybierz składniki</h3>
                <p>Pozostało: {maxOrder - orderIngredients.length}</p>
            </div>

            <div className="ingredients-list">
                {ingredients.map(ingredient => {
                    return (<Ingredient ingredient={ingredient} key={ingredient.id} />);
                    /* return <li key={ingredient.id}>{ingredient.name}</li> */
                })}
            </div>
        </div>
    );
}

export default IngredientsList;