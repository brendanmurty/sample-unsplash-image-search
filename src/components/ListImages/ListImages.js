import { Component } from "react";

class ListImages extends Component {

  constructor(properties) {
    super(properties);

    this.state = {
      images: properties.images || []
    };
  }

  render() {
    return (
      <ul className="ListImages-list">
        { this.state.images.map(image => (
        <li>
          <a href={ image.links.html }>
            <span className="ListImages-item-image">
              <img src={image.urls.thumb} alt={image.description} />
            </span>
            <span className="ListImages-item-description">
              { image.user.name } - { image.description }
            </span>
          </a>
        </li>
        ))}
      </ul>
    );
  }

}

export default ListImages;
