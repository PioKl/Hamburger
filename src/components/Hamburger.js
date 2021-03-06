import React, { useContext } from 'react';
import { LanguageContext } from "../contexts/LanguageContext";
import { OrderContext } from "../contexts/OrderContext";
import FinalizeOrder from "./FinalizeOrder";
import topBurger from "../img/topBurger.png"
import bottomBurger from "../img/bottomBurger.png"
/* import chicken from "../img/chickenBurger.png"
import beef from "../img/beefBurger.png"
import bacon from "../img/baconBurger.png"
import cheese from "../img/cheeseBurger.png"
import cucumber from "../img/cucumberBurger.png"
import lettuce from "../img/lettuceBurger.png"
import onion from "../img/onionBurger.png"
import mushrooms from "../img/mushroomsBurger.png"
import pepper from "../img/pepperBurger.png"
import tomato from "../img/tomatoBurger.png" */
import '../style/Hamburger.scss';

const Hamburger = () => {
    const { isLanguageChange, eng, pl } = useContext(LanguageContext);
    /* const burgerIngredientsImg = [chicken, beef, bacon, cheese, cucumber, lettuce, onion, mushrooms, pepper, tomato]; */
    const { orderIngredients, totalPrize } = useContext(OrderContext);
    const orderedIngredients = orderIngredients.map((orderIngredient, index) => (
        <div key={index} className={`burger__orderedIngredient burger__orderedIngredient--${orderIngredient.name}Burger`}></div>
    ))
    /*   ten sposób jest do wersji bardziej zautomatyzowanej  
    const orderedIngredients = orderIngredients.map((orderIngredient, index) => (
            <img className="topBurger" alt="burger" key={index}
                src={orderIngredient.name === "chicken" ? burgerIngredientsImg[0] :
                    orderIngredient.name === "beef" ? burgerIngredientsImg[1] :
                        orderIngredient.name === "bacon" ? burgerIngredientsImg[2] :
                            orderIngredient.name === "cheese" ? burgerIngredientsImg[3] :
                                orderIngredient.name === "cucumber" ? burgerIngredientsImg[4] :
                                    orderIngredient.name === "lettuce" ? burgerIngredientsImg[5] :
                                        orderIngredient.name === "onion" ? burgerIngredientsImg[6] :
                                            orderIngredient.name === "mushrooms" ? burgerIngredientsImg[7] :
                                                orderIngredient.name === "pepper" ? burgerIngredientsImg[8] :
                                                    orderIngredient.name === "tomato" ? burgerIngredientsImg[9] :
                                                        null} />
        )) */
    return (
        <>
            <div className="burger">
                <img className="burger__top" src={topBurger} alt="top-roll-of-burger" />
                {orderedIngredients}
                <img className="burger__bottom" src={bottomBurger} alt="bottom-roll-of-Burger" />
            </div>
            <div className="burger-summary">
                <p className="burger-summary__prize">{isLanguageChange ? eng.prize : pl.prize}{totalPrize > 0 ? totalPrize.toFixed(2) : totalPrize} zł</p>
                {totalPrize > 0 ? <FinalizeOrder /> : null}
            </div>
        </>
    );
}

export default Hamburger;