import { Component } from "react";

class SearchField extends Component {
  render() {
    return (
      <input
        type="text"
        className="SearchField-input"
        placeholder="sunset"
        onChange={this.props.onChange}
      ></input>
    )
  }
}

export default SearchField;
