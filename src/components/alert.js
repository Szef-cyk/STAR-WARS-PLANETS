import React from "react";
import { useGlobalContext } from "../context";
import { useEffect } from "react";

const Alert = () => {
  const { setAlert } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className='alert'>
      <p className='alert-text'>
        The number of planets needs to be within the range of 1 to 10.
      </p>
    </div>
  );
};

export default Alert;
