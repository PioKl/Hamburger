import React from 'react';
import '../style/App.scss';
import LanguageContextProvider from "../contexts/LanguageContext";
import ThemeContextProvider from "../contexts/ThemeContext";
import IngredientsContextProvider from "../contexts/IngredientsContext";
import OrderContextProvider from "../contexts/OrderContext";
import ConfirmationContextProvider from "../contexts/ConfirmationContext";
import IngredientsList from "./IngredientsList";
import OrderIngredientsList from "./OrderIngredientsList";
import Header from "./Header";
import Hamburger from "./Hamburger";
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <ThemeContextProvider>
          <Header />
          <IngredientsContextProvider>
            <main className="main">
              <OrderContextProvider>
                <ConfirmationContextProvider>
                  <div className="orderPanel">
                    <Hamburger />
                    <OrderIngredientsList />
                  </div>
                  <IngredientsList />
                </ConfirmationContextProvider>
              </OrderContextProvider>
            </main>
          </IngredientsContextProvider>
          <Footer />
        </ThemeContextProvider>
      </LanguageContextProvider>
    </div>

  );
}

export default App;
