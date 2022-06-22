import React from "react";
import { useGlobalContext } from "../context";
import SinglePlanet from "./singlePlanet";

const PlanetsList = () => {
  const { data, amountOfCards } = useGlobalContext();
  const newData = data.slice(0, amountOfCards);
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
