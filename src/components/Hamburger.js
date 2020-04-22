import React, { useContext } from 'react';
import { OrderContext } from "../contexts/OrderContext";
import FinalizeOrder from "./FinalizeOrder";

const Hamburger = () => {
    const { orderIngredients, totalPrize } = useContext(OrderContext);
    const orderedIngredients = orderIngredients.map((orderIngredient, index) => (
        <li key={index}>{orderIngredient.name} img 2</li>
    ))
    return (
        <>
            <div className="burger">
                <p>Góra buły img</p>
                <ul>
                    {orderedIngredients}
                </ul>
                <p>Spód buły img</p>
                {/* Warunek żeby nie było 0.00 na początku */}
            </div>
            <div className="burger-summary">
                <p>Cena: {totalPrize > 0 ? totalPrize.toFixed(2) : totalPrize} zł</p>
                {totalPrize > 0 ? <FinalizeOrder /> : null}
            </div>
        </>
    );
}

export default Hamburger;