import React from 'react';

export default function Square({ colorValue }) {
  return (
    <section className='square' style={{ backgroundColor: colorValue }}>
      <p>{colorValue || 'Empty Value'}</p>
    </section>
  );
}

Square.defaultProps = {
  colorValue: 'Empty color value',
};
