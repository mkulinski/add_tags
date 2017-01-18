import React, { PropTypes } from 'react';
import Dropdown from './Dropdown';
import './DropdownContainer.css';


const DropdownContainer = (props) =>
  <div className="dropDownContainer">
    <input
      onBlur={props.hideDropDown}
      onFocus={props.showDropdown}
      onChange={props.updateCurrText}
      value={props.currText}
      className="tagAddInput"
      placeholder="Type to add a tag."
    />
    {
      props.dropDownVis ?
        <Dropdown
          dropDownTags={props.dropDownTags}
          addExistingTag={props.addExistingTag}
        /> :
        null
    }
  </div>;

DropdownContainer.propTypes = {
  showDropdown: PropTypes.func.isRequired,
  addExistingTag: PropTypes.func.isRequired,
  hideDropDown: PropTypes.func.isRequired,
  updateCurrText: PropTypes.func.isRequired,
  dropDownVis: PropTypes.bool.isRequired,
  dropDownTags: PropTypes.arrayOf(PropTypes.object).isRequired,
  currText: PropTypes.string.isRequired,


};

export default DropdownContainer;
