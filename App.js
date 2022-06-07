import React from "react";
import "./App.css";
import PlanetsList from "./components/planetsList";
import Navbar from "./components/navbar";
import Input from "./components/input";

function App() {
  return (
    <>
      <Navbar />
      <Input />
      <PlanetsList />
      <footer></footer>
    </>
  );
}

export default App;
