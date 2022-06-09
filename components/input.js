import React from "react";
import { useGlobalContext } from "../context";

const Input = () => {
  const { amountOfCards, setAmountOfCards } = useGlobalContext();

  const enter = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      console.log("enter");
    }
  };

  return (
    <section className='input-section'>
      <form className='input-form'>
        <div className='input-container'>
          <label>Wygeneruj Planety Mordo</label>
          <input
            type='text'
            placeholder='How many planets do you want to generate?'
            value={amountOfCards}
            // onKeyDown={(e) => enter(e)} 
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
