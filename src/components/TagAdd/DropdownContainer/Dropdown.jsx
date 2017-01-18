import React, { PropTypes } from 'react';
import DropdownTag from './DropdownTag';


const Dropdown = ({ dropDownTags, addExistingTag }) => {
  const dropDownList = dropDownTags.map((item, index) =>
    <DropdownTag
      addExistingTag={addExistingTag}
      color={item.color}
      label={item.label}
      index={index}
      key={index}
    />
  );
  return (
    <div className="dropDownItems">
      {dropDownList}
    </div>
  );
};

Dropdown.propTypes = {
  dropDownTags: PropTypes.arrayOf(PropTypes.object).isRequired,
  addExistingTag: PropTypes.func.isRequired,
};

export default Dropdown;
