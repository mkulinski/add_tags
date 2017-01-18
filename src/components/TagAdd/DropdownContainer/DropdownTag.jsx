import React, { PropTypes } from 'react';


const DropdownTag = ({ color, label, index, addExistingTag }) =>
  <div className="dropDownTag" onMouseDown={() => addExistingTag(index)}>
    <div className="colorBox dropDownColorBox" style={{ backgroundColor: color }} />
    <div className="dropDownText">{label}</div>
  </div>;

DropdownTag.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  addExistingTag: PropTypes.func.isRequired,
};

export default DropdownTag;
