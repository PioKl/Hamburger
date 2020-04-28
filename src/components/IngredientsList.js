import React, { useContext } from 'react';
import Ingredient from "./Ingredient";
import { IngredientsContext } from "../contexts/IngredientsContext";
import { OrderContext } from "../contexts/OrderContext";
import '../style/IngredientsList.scss';

const IngredientsList = () => {
    const { ingredients, maxOrder } = useContext(IngredientsContext);
    const { orderIngredients } = useContext(OrderContext);
    return (
        <div className="ingredientsPanel">
            <div className="ingredientsInfo">
                <h4 className="ingredientsInfo__title">Wybierz składniki</h4>
                <p className="ingredientsInfo__left">Pozostało: {maxOrder - orderIngredients.length}</p>
            </div>

            <div className="ingredientsList">
                {ingredients.map(ingredient => {
                    return (<Ingredient ingredient={ingredient} key={ingredient.id} />);
                    /* return <li key={ingredient.id}>{ingredient.name}</li> */
                })}
            </div>
        </div>
    );
}

export default IngredientsList;