import React from "react";

const Input = () => {
  return (
    <section className='input-section'>
      <form className='input-form'>
        <div className='input-container'>
          <label>Wygeneruj Planety Mordo</label>
          <input type='text' placeholder="How many planets do you want to generate?"/>
        </div>
      </form>
    </section>
  );
};

export default Input;
