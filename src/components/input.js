import React from "react";
import { useGlobalContext } from "../context";
import { useEffect } from "react";

const Input = () => {
  const {
    amountOfCards,
    setAmountOfCards,
    typedAmount,
    setTypedAmount,
    setAlert,
  } = useGlobalContext();

  const handleChange = (event) => {
    setTypedAmount(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typedAmount > 10 || typedAmount < 0) {
      setAlert(true);
      setTypedAmount("");
    } else {
      setAmountOfCards(typedAmount);
    }
  };

  useEffect(() => {
    setTypedAmount("");
  }, [amountOfCards]);

  return (
    <section className='input-section'>
      <form className='input-form' onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Wygeneruj Planety Mordo</label>
          <input
            type='number'
            placeholder='How many planets do you want to generate? (1-10)'
            value={typedAmount}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default Input;
