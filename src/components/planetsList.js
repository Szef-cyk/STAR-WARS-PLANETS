import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context";
import SinglePlanet from "./singlePlanet";

const PlanetsList = () => {
  const {
    data,
    amountOfCards,
    setNewData,
    newData,
    setAmountOfCards,
    inputRef,
  } = useGlobalContext();

  const randomizeShufflomize = () => {
    const d = data
      .sort(() => (Math.random() > 0.5 ? 1 : -1))
      .slice(0, amountOfCards);
    setNewData(d);
  };

  useEffect(() => {
    if (!data?.length || newData.length) return;
    randomizeShufflomize();
  }, [amountOfCards]);

  useEffect(() => {
    if (parseInt(amountOfCards) === newData.length) return;
    randomizeShufflomize();
  }, [amountOfCards]);

  return (
    <section className='planets-section'>
      <div className='planets-container'>
        {newData.map((planet) => {
          return <SinglePlanet key={planet.id} {...planet} />;
        })}
      </div>
    </section>
  );
};

export default PlanetsList;
