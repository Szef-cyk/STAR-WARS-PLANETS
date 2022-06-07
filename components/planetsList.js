import React from "react";
import SinglePlanet from "./singlePlanet";

const PlanetsList = () => {
  return (
    <section className="planets-section">
      <div className='planets-container'>
        <SinglePlanet />
        <SinglePlanet />
        <SinglePlanet />
        <SinglePlanet />
        <SinglePlanet />
        <SinglePlanet />
        <SinglePlanet />
        <SinglePlanet />
        
      </div>
    </section>
  );
};

export default PlanetsList;
