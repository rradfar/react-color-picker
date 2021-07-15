import React from 'react';
import colorNames from 'colornames';

export default function Input({
  colorValue,
  isDarkText,
  setColorValue,
  setHexValue,
  setIsDarkText,
}) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor=''>Add color name: </label>
      <input
        type='text'
        placeholder='Add color name'
        value={colorValue}
        onChange={e => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
        autoFocus
        required
      />
      <button type='button' onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
}
