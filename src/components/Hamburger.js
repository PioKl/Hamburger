import React, { useContext } from 'react';
import { OrderContext } from "../contexts/OrderContext";
import FinalizeOrder from "./FinalizeOrder";

const Hamburger = () => {
    const { orderIngredients, totalPrize } = useContext(OrderContext);
    const orderedIngredients = orderIngredients.map((orderIngredient, index) => (
        <li key={index}>{orderIngredient.name} img 2</li>
    ))
    /*     let prize = 0;
        const prizeOfOrderedIngredients = orderIngredients.map(ingredient => {
            return ingredient.prize;
        })
        prizeOfOrderedIngredients.forEach(ingredient => prize += ingredient); */
    return (
        <div>
            <p>Góra buły img</p>
            <ul>
                {orderedIngredients}
            </ul>
            <p>Spód buły img</p>
            {/* Warunek żeby nie było 0.00 na początku */}
            <p>Cena: {totalPrize > 0 ? totalPrize.toFixed(2) : totalPrize} zł</p>
            {/*{prize > 0 ? <button>Zamów</button> : null} */}
            {totalPrize > 0 ? <FinalizeOrder /> : null}
        </div>
    );
}

export default Hamburger;