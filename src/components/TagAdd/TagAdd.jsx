import React, { PropTypes } from 'react';
import ColorPickContainer from './ColorPickContainer';
import DropdownContainer from './DropdownContainer';
import './TagAdd.css';


const TagAdd = (props) =>
  <div className="tagAddContainer">
    <form
      onSubmit={(e) => props.addTag(e, props.currText)}
      className="tagAddForm"
    >
      <DropdownContainer
        hideDropDown={props.hideDropDown}
        showDropdown={props.showDropdown}
        updateCurrText={props.updateCurrText}
        currText={props.currText}
        dropDownVis={props.dropDownVis}
        dropDownTags={props.dropDownTags}
        addExistingTag={props.addExistingTag}
      />
      <ColorPickContainer
        selectedColorVis={props.selectedColorVis}
        colorPickerVis={props.colorPickerVis}
        toggleColorPicker={props.toggleColorPicker}
        colorOptions={props.colorOptions}
        updateCurrColor={props.updateCurrColor}
        currColor={props.currColor}
      />
      <button type="submit" className="tagAddSubButton">Add Tag</button>
    </form>
  </div>;

TagAdd.propTypes = {
  addTag: PropTypes.func.isRequired,
  updateCurrText: PropTypes.func.isRequired,
  updateCurrColor: PropTypes.func.isRequired,
  showDropdown: PropTypes.func.isRequired,
  addExistingTag: PropTypes.func.isRequired,
  hideDropDown: PropTypes.func.isRequired,
  toggleColorPicker: PropTypes.func.isRequired,
  selectedColorVis: PropTypes.bool.isRequired,
  colorPickerVis: PropTypes.bool.isRequired,
  dropDownVis: PropTypes.bool.isRequired,
  currColor: PropTypes.string.isRequired,
  currText: PropTypes.string.isRequired,
  colorOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  dropDownTags: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TagAdd;
