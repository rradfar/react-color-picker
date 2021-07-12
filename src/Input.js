import React from 'react';

export default function Input({ colorValue, setColorValue }) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor=''>Add color name: </label>
      <input
        type='text'
        placeholder='Add color name'
        value={colorValue}
        onChange={e => setColorValue(e.target.value)}
        autoFocus
        required
      />
    </form>
  );
}
