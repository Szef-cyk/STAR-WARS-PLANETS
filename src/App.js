import React from "react";
import "./App.css";
import PlanetsList from "./components/planetsList";
import Navbar from "./components/navbar";
import Input from "./components/input";
import Loading from "./pages/loading";
import { useGlobalContext } from "./context";
import Alert from "./components/alert";

function App() {
  const {  loading, alert } = useGlobalContext();

  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  }
  return (
    <>
      {alert && <Alert />}
      <Navbar />
      <Input />
      <PlanetsList />
      <footer></footer>
    </>
  );
}

export default App;
