import React, { PropTypes } from 'react';
import SelectedColor from './SelectedColor';
import ColorPickerPopup from './ColorPickerPopup';
import './ColorPickContainer.css';


const ColorPickContainer = (props) =>
  <div className="colorPickContainer">
    {
      props.selectedColorVis ?
        <SelectedColor
          toggleColorPicker={props.toggleColorPicker}
          currColor={props.currColor}
        /> :
        null
    }
    {
      props.colorPickerVis ?
        <ColorPickerPopup
          colorOptions={props.colorOptions}
          updateCurrColor={props.updateCurrColor}
        /> :
        null
    }
  </div>;

ColorPickContainer.propTypes = {
  toggleColorPicker: PropTypes.func.isRequired,
  updateCurrColor: PropTypes.func.isRequired,
  colorPickerVis: PropTypes.bool.isRequired,
  selectedColorVis: PropTypes.bool.isRequired,
  colorOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  currColor: PropTypes.string.isRequired,
};

export default ColorPickContainer;
