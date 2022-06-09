import React, { useState, useEffect } from "react";

const SinglePlanet = ({ name, climate, terrain, period, id }) => {
  const [image, setImage] = useState();
 
  const fetchImage = async () => {
    try {
      const response = await import(`../images/${id}.webp`);
      setImage(response.default);
    } catch (e) {
      console.error("Image doesn't exists");
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <div className='single-planet-card' key={id}>
      <header>{name}</header>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='planet-info'>
        <p>Climate: {climate}</p>
        <p>Terrain: {terrain}</p>
        <p>Orbital Period: {period}</p>
      </div>
    </div>
  );
};

export default SinglePlanet;
