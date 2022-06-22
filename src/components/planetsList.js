import React from "react";
import { useGlobalContext } from "../context";
import SinglePlanet from "./singlePlanet";

const PlanetsList = () => {
  const { data, amountOfCards } = useGlobalContext();

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const newData = shuffle(data).slice(0, amountOfCards);

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
