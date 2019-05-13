import React from 'react';

export default function Color() {
  const color = {
    name: 'fuschia',
    hex: '#CA2C92',
    rgb: {
      red: 202,
      green: 44,
      blue: 146
    }
  };

  return (
    <dl>

      <dt>Name:</dt>
      <dd>{color.name}</dd>

      <dt>Hex:</dt>
      <dd>{color.hex}</dd>

      <dt>RGB:</dt>
      <dd>Red: {color.rgb.red}</dd>
      <dd>Green: {color.rgb.green}</dd>
      <dd>Blue: {color.rgb.blue}</dd>
        
    </dl>
  );
}
