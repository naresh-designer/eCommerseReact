import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./ProductContext/ProductContext";
import { FilterContextProvider } from "./ProductContext/ProductFilterContext";
import { CartProvider } from "./ProductContext/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);
