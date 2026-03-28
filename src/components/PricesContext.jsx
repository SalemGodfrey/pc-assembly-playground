"use client";
import { createContext, useContext, useState } from "react";
const PricesContext = createContext(null);
export function PricesProvider({ children }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [installed, setInstalled] = useState({});

  const updateInstalled = (item) => {
    setInstalled((prev) => ({ ...prev, [item.product]: item }));
  };

  return (
    <PricesContext.Provider value={{ selectedItem, setSelectedItem, installed, updateInstalled }}>
      {children}
    </PricesContext.Provider>
  );
}
export function usePrices() {
  const context = useContext(PricesContext);
  if (!context) throw new Error("usePrices must be used within PricesProvider");
  return context;
}