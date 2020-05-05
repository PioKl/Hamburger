import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { OrderContext } from '../contexts/OrderContext';
import '../style/Ingredient.scss';

const Ingredient = ({ ingredient }) => {

    const { isLanguageChange, eng, pl } = useContext(LanguageContext);
    const { addIngredientToOrder, orderIngredients } = useContext(OrderContext);
    const name = ingredient.name;
    const prize = ingredient.prize;

    const handleIngredient = () => {
        addIngredientToOrder(name, prize);
    }
    return (
        <button disabled={orderIngredients.length === 6 ? true : false} className={`ingredient btn-chooseIngredient ingredient--${ingredient.name}`} title={isLanguageChange ? `${eng[ingredient.name]}` : `${pl[ingredient.name]}`} alt={`${ingredient.name}Img`} onClick={handleIngredient}>
        </button>
    );
}

export default Ingredient;