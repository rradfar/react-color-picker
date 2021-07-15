import React from 'react';

export default function Square({ colorValue, hexValue, isDarkText }) {
  return (
    <section
      className='square'
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? '#000' : '#fff',
      }}
    >
      <p>{colorValue || 'Empty Value'}</p>
      <p>{hexValue || ''}</p>
    </section>
  );
}

Square.defaultProps = {
  colorValue: 'Empty color value',
};
