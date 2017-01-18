import React, { PropTypes } from 'react';
import ColorBox from './ColorBox';


const ColorPickerPopup = ({ updateCurrColor, colorOptions }) => {
  const colors = colorOptions.map((color, index) =>
    <ColorBox color={color} updateCurrColor={updateCurrColor} key={index} />
  );
  return (
    <div className="colorPickerPopup">
      {colors}
    </div>
  );
};

ColorPickerPopup.propTypes = {
  updateCurrColor: PropTypes.func.isRequired,
  colorOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ColorPickerPopup;
