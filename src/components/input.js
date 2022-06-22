import React from "react";
import { useGlobalContext } from "../context";
import { useRef } from "react";

const Input = () => {
  const {
    setAmountOfCards,

    setAlert,
  } = useGlobalContext();

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value > 10 || inputRef.current.value < 0) {
      setAlert(true);
      setAmountOfCards("");
      inputRef.current.value = null;
    } else {
      setAmountOfCards(inputRef.current.value);
      inputRef.current.value = null;
    }
  };

  return (
    <section className='input-section'>
      <form className='input-form' onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Wygeneruj Planety Mordo</label>
          <input
            ref={inputRef}
            type='number'
            placeholder='How many planets do you want to generate? (1-10)'
          />
        </div>
      </form>
    </section>
  );
};

export default Input;
