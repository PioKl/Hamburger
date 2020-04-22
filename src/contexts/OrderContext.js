import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

let nextIngredient = 0;


/* rozwiązanie z tablicą i funkcją compareId jest po to, aby gdy np. usunę pomidora z 3 pozycji, to następny element, który dodam
np.onion ma zająć 3 pozycję. Przed usunięciem tak wyglądają id w tablicy orderIngredients [0,1,2,3,4,5], po usunięciu [0,1,2,4,5], po dodaniu nowego elementu [0,1,2,4,5,3] i dopiero po użyciu funkcji compareId [0,1,2,3,4,5]
Powiedzmy, że usunąłem pomidora, a zaraz sałatę z tablicy o id kolejno [1] i [4]. Tablica orderIngredients przed usunięciem 
[0,1,2,3,4,5], po usunięciu [0,2,3,5]. Teraz dodaję bekon i ser, poprzez idTable.push(id) mam zapmiętane te dwa usunięte id i w tablicy idTable mam [1,4]. 
id: idTable.length ? idTable[0] : nextIngredient++ - (warunek jest podczas dodawania elementu) ten warunek wykorzystuje to, że jeśli tablica nie jest pusta, to znaczy, że coś usunąłem więc pobierz pierwszy element z tej tablicy. Pobiera więc jeden i wstawia do tablicy, tablica teraz wygląda tak [0,2,3,5,1] jest ona zaraz sortowana i teraz jej stan to [0,1,2,3,5]. Następnie za pomocą 
idTable.shift usuwam z tablicy pierwszy element, ponieważ został on już dodany, teraz tablica ma wartość [4]. Kolejno do tablicy orderIngredients zostaje dodany ser i proces wygląda tak samo, tablica teraz wygląda tak: [0,1,2,3,5,4], następuje sort, [0,1,2,3,4,5], shift usuwa element z tablicy i idTable jest teraz pusta. Więc zgodnie z warunkiem zwiększ nextIgredient o 1, nextIngredient mógł się zatrzymać na np.3 gdy usunąłem coś z tablicy, gdy już właśnie idTable jest pusta kolejny dodany element będzie już normalnie dodawał się na koniec tablicy orderIngredients.
Rozwiązanie z compare na podstawie https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
*/

let idTable = [];

const OrderContextProvider = (props) => {

    //Funkcja porównująca
    function compareId(a, b) {
        const idA = a.id;
        const idB = b.id;

        let comparison = 0;
        if (idA > idB) {
            comparison = 1;
        } else if (idA < idB) {
            comparison = -1;
        }
        return comparison;
    }

    const [orderIngredients, setOrderIngredients] = useState([]);

    let totalPrize = 0; //cena podsumowana

    orderIngredients.forEach(ingredient => totalPrize += ingredient.prize); //dodawanie ceny każdego składnika do totalPrize

    const addIngredientToOrder = (name, prize) => {
        /* max 6 składników, rozwiązanie z idTable i zmiana w warunku z nextIngredient na orderIngredients w celu uniknięcia duplikowania się indeksów. Wykorzystanie idTable do dodawania elementu do ostatnio usuniętego miejsca i compareId do porównania id w celu posortowania ich */
        if (orderIngredients.length <= 5) {
            /* setOrderIngredients([...orderIngredients, { name, prize, id: nextIngredient++ }]); */
            setOrderIngredients([...orderIngredients, { name, prize, id: idTable.length ? idTable[0] : nextIngredient++ }].sort(compareId));
            idTable.shift(); // usuń pierwszy element z tablicy
        }
    }

    const removeIngredientFromOrder = (id) => {
        setOrderIngredients(orderIngredients.filter(orderIngredient => orderIngredient.id !== id))
        idTable.push(id)
    }

    const resetOrder = () => {
        setOrderIngredients([]);
        nextIngredient = 0;
        idTable = []; // reset czyści mi również idTable
    }

    return (
        <OrderContext.Provider value={{ orderIngredients, totalPrize, addIngredientToOrder, removeIngredientFromOrder, resetOrder }}>
            {props.children}
        </OrderContext.Provider>
    )

}

export default OrderContextProvider;