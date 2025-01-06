import { useState } from "react";
import { createContext } from "react";

const CurrencyContext = createContext();
export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("ariary");

  function changeCurrency(currency) {
    currency === "ariary" ? setCurrency("fmg") : setCurrency("ariary");
  }

  return (
    <CurrencyContext.Provider value={{ currency, changeCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export default CurrencyContext;
