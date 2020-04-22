import React, { useContext, useState } from 'react';
import { OrderContext } from '../contexts/OrderContext';
import '../style/Ingredient.scss';

const Ingredient = ({ ingredient }) => {

    const { addIngredientToOrder } = useContext(OrderContext);
    const name = ingredient.name;
    const prize = ingredient.prize;

    const handleIngredient = () => {

        /*         setName(ingredient.name);
                setPrize(ingredient.prize); */
        addIngredientToOrder(name, prize);
        /*         setName('');
                setPrize(''); */
    }
    return (
        <button className={`ingredient ingredient-${ingredient.name}`} title={`${ingredient.name}`} alt={`${ingredient.name}Img`} onClick={handleIngredient}>
            {/*        <p>{ingredient.name}</p>
            <p>{ingredient.prize}zł</p> */}
        </button>
    );
}

export default Ingredient;