import React, { PropTypes } from 'react';


const ColorBox = ({ color, updateCurrColor }) =>
  <div
    onMouseDown={() => updateCurrColor(color)}
    style={{ backgroundColor: color }}
    className="colorBox"
  />;

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  updateCurrColor: PropTypes.func.isRequired,
};

export default ColorBox;
