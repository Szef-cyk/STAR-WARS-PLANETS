import React from "react";
import { useGlobalContext } from "../context";

const Input = () => {
  const { setAmountOfCards, setAlert, inputRef, setNewData, setEngage, engage } =
    useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewData([]);
    if (inputRef.current.value > 10 || inputRef.current.value < 0) {
      setAlert(true);
      setAmountOfCards("");
      inputRef.current.value = null;
    } else {
      setEngage(!engage)
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
            onWheel={(e) => e.target.blur()}
            ref={inputRef}
            type='number'
            placeholder='How many planets do you want to generate?'
          />
        </div>
      </form>
    </section>
  );
};

export default Input;
