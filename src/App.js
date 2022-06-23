import "./App.css";
import React from "react";
import { useGlobalContext } from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./pages/loading";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
function App() {
  const { loading } = useGlobalContext();

  return (
    <Router>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
