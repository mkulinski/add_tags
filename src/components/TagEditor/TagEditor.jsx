import React, { Component } from 'react';
import TagList from '../TagList';
import TagAdd from '../TagAdd';
import tagsJSON from '../../api/tags.json';

import './TagEditor.css';


class TagEditor extends Component {
  constructor() {
    super();
    const dropDownTags = tagsJSON['tags:'];
    const colorOptions = [
      '#0FADE9', '#0D40D9', '#F6524F', '#9F0000',
      '#05D9B5', '#00C361', '#FFCF2E', '#FF7A1D',
      '#B372E6', '#5621A2', '#8C8D91', '#3E4042',
    ];
    this.state = {
      tags: [],
      dropDownTags,
      colorOptions,
      currText: '',
      currColor: '#0FADE9',
      dropDownVis: false,
      colorPickerVis: false,
      selectedColorVis: true,
      dropdownTagIndex: null,
      warningVis: false,
    };
    this.closeTag = this.closeTag.bind(this);
    this.addTag = this.addTag.bind(this);
    this.updateCurrText = this.updateCurrText.bind(this);
    this.updateCurrColor = this.updateCurrColor.bind(this);
    this.addExistingTag = this.addExistingTag.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropDown = this.hideDropDown.bind(this);
    this.toggleColorPicker = this.toggleColorPicker.bind(this);
    this.toggleSelectedColor = this.toggleSelectedColor.bind(this);
  }
  // allows the user to click the x and remove a tag from the TagList
  closeTag(e, tagIndex) {
    e.preventDefault();
    const addTag = this.state.tags[tagIndex];
    const dropDownTags = [addTag, ...this.state.dropDownTags];
    const tags = this.state.tags.filter((tag, index) => index !== tagIndex);
    this.setState({ tags, dropDownTags });
  }
  // checks to see if user's current potential tag already exists
  checkIfTagExists() {
    const dropDownTags = this.state.dropDownTags;
    const tags = this.state.tags;
    // checks to see if proposed tag is in dropDownTags state array
    for (let i = 0; i < dropDownTags.length; i++) {
      if (dropDownTags[i].label.toLowerCase() === this.state.currText.toLowerCase()) return true;
    }
    // checks to see if proposed tag is in tags state array
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].label.toLowerCase() === this.state.currText.toLowerCase()) return true;
    }
    return false;
  }
  // removes tag from dropDownTags
  removeDropdownTag(dropdownTagIndex) {
    const dropDownTags = this.state.dropDownTags.filter((item, index) => index !== dropdownTagIndex);
    this.setState({ dropDownTags });
  }
  // functionality behind the add tag button. Allows for tags to be added to TagList
  addTag(e, label) {
    e.preventDefault();
    // hides colorPicker if it's visible
    if (this.state.colorPickerVis) this.toggleColorPicker();
    // shows selectedColor box if it's hidden
    if (!this.state.selectedColorVis) this.toggleSelectedColor();
    // hides warning if it's visible
    if (this.state.warningVis) this.toggleWarningVis();
    // checks to see if current user input is empty
    if (!this.state.currText) return this.toggleWarningVis();
    // checks to see if tag is already in dropDownTags list
    const dropdownTagIndex = this.state.dropdownTagIndex;
    if (this.checkIfTagExists() && dropdownTagIndex === null) {
      return this.toggleWarningVis();
    }
    // checks to see if the tag is from the dropDownTags
    if (dropdownTagIndex !== null) this.removeDropdownTag(dropdownTagIndex);
    // creates new tag and adds it to the tags array
    const color = this.state.currColor;
    const newTag = { label, color };
    const tags = [newTag, ...this.state.tags];
    this.setState({
      tags,
      currText: '',
      currColor: '#0FADE9',
      dropdownTagIndex: null,
    });
  }
  // updates the currText state as the user types.
  // also updates currText with existing tag text from the dropDownTags
  updateCurrText(e) {
    const currText = (e === Object(e)) ? e.target.value : e;
    this.setState({ currText });
  }
  // updates the currColor state
  updateCurrColor(color) {
    this.setState({ currColor: color });
  }
  // show/hide for the ColorPickerPopup component
  toggleColorPicker() {
    this.setState({ colorPickerVis: !this.state.colorPickerVis });
  }
  // show/hide for the SelectedColor component
  toggleSelectedColor() {
    this.setState({ selectedColorVis: !this.state.selectedColorVis });
  }
  // show/hide on the warning box
  toggleWarningVis() {
    this.setState({ warningVis: !this.state.warningVis });
  }
  // show for the DropDown component
  showDropdown() {
    this.setState({ dropDownVis: true });
  }
  // hide for the DropDown component
  hideDropDown() {
    this.setState({ dropDownVis: false });
  }
  // triggered when a DropDownTag is clicked.
  addExistingTag(dropdownTagIndex) {
    // hides colorPicker
    if (this.state.colorPickerVis) this.toggleColorPicker();

    const newTag = this.state.dropDownTags[dropdownTagIndex];

    this.hideDropDown();
    this.toggleSelectedColor();
    this.updateCurrColor(newTag.color);
    this.updateCurrText(newTag.label);
    this.setState({ dropdownTagIndex });
  }

  render() {
    return (
      <div className="tag-editor">
        <h3 className="tag-editor-title">TAGS</h3>
        <TagList
          tags={this.state.tags}
          closeTag={this.closeTag}
        />
        {
          this.state.warningVis ?
            <div className="warningTag">
              Please enter a valid, unique tag name
            </div> :
            null
        }
        <TagAdd
          {...this.state}
          addTag={this.addTag}
          updateCurrText={this.updateCurrText}
          hideDropDown={this.hideDropDown}
          showDropdown={this.showDropdown}
          addExistingTag={this.addExistingTag}
          updateCurrColor={this.updateCurrColor}
          toggleColorPicker={this.toggleColorPicker}
        />
      </div>
    );
  }
}

export default TagEditor;
