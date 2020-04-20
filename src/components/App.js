import React from 'react';
import '../style/App.scss';
import IngredientsContextProvider from "../contexts/IngredientsContext";
import OrderContextProvider from "../contexts/OrderContext";
import IngredientsList from "./IngredientsList";
import OrderIngredientsList from "./OrderIngredientsList";
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="header">Dummy</header>

      <IngredientsContextProvider>
        <main className="main">
          <OrderContextProvider>
            <OrderIngredientsList />
            <IngredientsList />
          </OrderContextProvider>
        </main>
      </IngredientsContextProvider>

      <Footer />
    </div>
  );
}

export default App;
