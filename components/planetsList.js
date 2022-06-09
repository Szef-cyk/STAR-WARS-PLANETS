import React from "react";
import { useGlobalContext } from "../context";
import SinglePlanet from "./singlePlanet";

const PlanetsList = () => {
  const { data } = useGlobalContext();
  return (
    <section className='planets-section'>
      <div className='planets-container'>
        {data.map((planet) => {
          return <SinglePlanet key={planet.id} {...planet}/>;
        })}
      </div>
    </section>
  );
};

export default PlanetsList;
