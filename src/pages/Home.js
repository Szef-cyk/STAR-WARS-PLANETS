import React from "react";
import PlanetsList from "../components/planetsList";
import Input from "../components/input";
import Navbar from "../components/navbar";
import Alert from "../components/alert";
import { useGlobalContext } from "../context";

function Home() {
  const { alert } = useGlobalContext();
  return (
    <>
      {alert && <Alert />}
      <Navbar />
      <Input />
      <PlanetsList />
    </>
  );
}

export default Home;
