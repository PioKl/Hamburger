import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const LanguageContextProvider = (props) => {


    const [isLanguageChange, setLanguageChange] = useState(false);

    const [eng] = useState(
        {
            order: "Order",
            reset: "Reset order",
            prize: "Prize: ",
            choose: "Choose ingredients",
            left: "Left: ",
            chicken: "chicken",
            beef: "beef",
            bacon: "bacon",
            cheese: "cheese",
            lettuce: "lettuce",
            onion: "onion",
            tomato: "tomato",
            cucumber: "cucumber",
            mushrooms: "mushrooms",
            pepper: "pepper",

        }
    )

    const [pl] = useState(
        {
            order: "Zamów",
            reset: "Usuń",
            prize: "Cena: ",
            choose: "Wybierz składniki",
            left: "Pozostało: ",
            chicken: "kurczak",
            beef: "wołowina",
            bacon: "bekon",
            cheese: "ser",
            lettuce: "sałata",
            onion: "cebula",
            tomato: "pomidor",
            cucumber: "ogórek",
            mushrooms: "grzyby",
            pepper: "papryka",

        }
    )

    const toggleLanguageChange = () => {
        setLanguageChange(!isLanguageChange)
    }

    return (
        <LanguageContext.Provider value={{ isLanguageChange, eng, pl, toggleLanguageChange }}>
            {props.children}
        </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;