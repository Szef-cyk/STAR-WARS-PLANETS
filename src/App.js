import "./App.css";
import React from "react";
import { useGlobalContext } from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Loading from "./pages/loading";
import Home from "./pages/Home";

function App() {
  const { loading } = useGlobalContext();

  return (
    <Router>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Home />
        </>
      )}
      ;
    </Router>
  );
}

export default App;
