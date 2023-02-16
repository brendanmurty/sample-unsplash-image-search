import { Component } from "react";
import "./SearchField.css";

/**
 * Component: SearchField
 * 
 * Constructs a search input field which passes the input event back up
 * to the parent component.
 * 
 * In a larger production system this would likely use a UI library
 * like https://mui.com/
 * 
 **/
class SearchField extends Component {
  render() {
    return (
      <input
        type="search"
        className="SearchField-input"
        onKeyUp={(e) => this.props.onChange(e) }
        autoFocus
      ></input>
    )
  }
}

export default SearchField;
