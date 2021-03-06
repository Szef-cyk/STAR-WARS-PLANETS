import React, { createContext } from "react";
import { useState, useContext, useEffect, useRef } from "react";
const url = "https://swapi.dev/api/planets/";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [amountOfCards, setAmountOfCards] = useState("");
  const [typedAmount, setTypedAmount] = useState("");
  const [alert, setAlert] = useState(false);
  const [newData, setNewData] = useState([]);
  const [engage, setEngage] = useState(false)
  const inputRef = useRef(null);
  
  const fetchData = async function () {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const { results } = data;
    if (results) {
      const planetsList = results.map((planet) => {
        const { name, climate, terrain, orbital_period } = planet;
        return {
          name,
          climate,
          terrain,
          period: orbital_period,
          id: results.indexOf(planet) + 1,
        };
      });
      setData(planetsList);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        number,
        data,
        newData,
        loading,
        amountOfCards,
        typedAmount,
        alert,
        inputRef,
        engage,
        setEngage,
        setNewData,
        setAlert,
        setTypedAmount,
        setAmountOfCards,
        setNumber,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
