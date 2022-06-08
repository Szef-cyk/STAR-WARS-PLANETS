import React, { Children, createContext } from "react";
import { useState, useContext, useEffect } from "react";
const url = "https://swapi.dev/api/planets/";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
          id: results.indexOf(planet),
        };
      });
      console.log(planetsList);
      setData(planetsList);
      setLoading(false);
    } else{
      setLoading(false)
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
        loading,
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
