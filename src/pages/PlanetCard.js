import React from "react";
import Navbar from "../components/navbar";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
const PlanetCard = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState([]);
  useEffect(() => {
    async function getPlanet() {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
        const data = await response.json();
        const {
          name,
          rotation_period,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water,
          population,
        } = data;
        const newPlanet = {
          name,
          rotation_period,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water,
          population,
        };
        setPlanet(newPlanet);
      } catch (error) {
        console.log(error);
      }
    }
    getPlanet();
  }, [id]);

  const {
    name,
    rotation_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
  } = planet;
  return (
    <>
      <Navbar />
      <h2>planet you chose</h2>
      {name}
      <Link to='/'>
        <button className='btn'>Go back</button>
      </Link>
    </>
  );
};

export default PlanetCard;
