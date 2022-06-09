import React from "react";
import { useGlobalContext } from "../context";

const Input = () => {
  const { amountOfCards, setAmountOfCards } = useGlobalContext();

  const enter = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      console.log("enter", amountOfCards);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='input-section'>
      <form className='input-form' onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>Wygeneruj Planety Mordo</label>
          <input
            type='number'
            placeholder='How many planets do you want to generate? (1-10)'
            value={amountOfCards}
            onKeyUp={(e) => {
              enter(e);
            }}
            onChange={(e) => {
              setAmountOfCards(e.target.value);
            }}
          />
          {/* {console.log(amountOfCards)} */}
        </div>
      </form>
    </section>
  );
};

export default Input;
