import React from 'react';
import '../style/App.scss';
import IngredientsContextProvider from "../contexts/IngredientsContext";
import OrderContextProvider from "../contexts/OrderContext";
import IngredientsList from "./IngredientsList";
import OrderIngredientsList from "./OrderIngredientsList";
import Hamburger from "./Hamburger";
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="header">Dummy</header>

      <IngredientsContextProvider>
        <main className="main">
          <OrderContextProvider>
            <div className="orderPanel">
              <Hamburger />
              <OrderIngredientsList />
            </div>
            <IngredientsList />
          </OrderContextProvider>
        </main>
      </IngredientsContextProvider>

      <Footer />
    </div>
  );
}

export default App;
