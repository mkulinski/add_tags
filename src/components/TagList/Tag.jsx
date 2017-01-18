import React, { PropTypes } from 'react';
import './TagList.css';


const Tag = ({ tag, index, closeTag }) =>
  <article className="tagContainer">
    <span className="tagSpan" style={{ backgroundColor: tag.color }}> {tag.label} </span>
    <span
      className="xTag"
      style={{ backgroundColor: tag.color }}
      onMouseDown={(e) => closeTag(e, index)}
    >
      x
    </span>
  </article>;

Tag.propTypes = {
  tag: PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.color,
  }),
  index: PropTypes.number,
  closeTag: PropTypes.func,
};

export default Tag;
