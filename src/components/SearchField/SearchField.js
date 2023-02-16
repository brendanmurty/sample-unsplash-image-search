import { Component } from "react";

class SearchField extends Component {
  render() {
    return (
      <input
        type="search"
        className="SearchField-input"
        onKeyUp={(e) => this.props.onChange(e) }
      ></input>
    )
  }
}

export default SearchField;
