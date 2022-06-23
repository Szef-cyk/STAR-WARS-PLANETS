import React from "react";
import Navbar from "../components/navbar";
const Loading = () => {
  return (
    <>
      <Navbar />
      <div className='loading'>
        <h3>Loading....</h3>
      </div>
    </>
  );
};

export default Loading;
