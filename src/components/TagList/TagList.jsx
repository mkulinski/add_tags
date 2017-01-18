import React, { PropTypes } from 'react';
import Tag from './Tag';


const TagList = ({ tags, closeTag }) => {
  const displayTags = tags.map((tag, index) =>
    <Tag tag={tag} index={index} closeTag={closeTag} key={index} />
  );
  return (
    <div className="tagListContainer">
      {displayTags}
    </div>
  );
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  closeTag: PropTypes.func.isRequired,
};

export default TagList;
