import React, { PropTypes } from 'react';


const SelectedColor = ({ toggleColorPicker, currColor }) =>
  <span
    onMouseDown={toggleColorPicker}
    onBlur={toggleColorPicker}
    style={{ backgroundColor: currColor }}
    className="selectedColor"
  >
    NEW
  </span>;

SelectedColor.propTypes = {
  toggleColorPicker: PropTypes.func.isRequired,
  currColor: PropTypes.string.isRequired,
};

export default SelectedColor;
