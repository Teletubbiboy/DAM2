import React from 'react';

const colors = ['Red', 'Green', 'Blue', 'Yellow'];

const ColorsList = () => {
  return (
    <ul>
      {colors.map((color) => (
        <li key={color}>
          {color}
        </li>

      ))}
    </ul>
  );
};

export default ColorsList;
