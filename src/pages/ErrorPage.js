import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <section class='about-section'>
        <h2>Error! Page not found.</h2>
        <Link to='/'>
          <button class='btn'>Go back</button>
        </Link>
      </section>
    </>
  );
};

export default ErrorPage;
