import { Component } from "react";

class ListImages extends Component {

  render() {
    if (this.props.images) {
      return (
        <ul className="ListImages-list">
          {this.props.images.map(image => (
          <li key={image.links.html.toString() }>
            <a href={image.links.html}>
              <span className="ListImages-item-image">
                <img src={image.urls.thumb} alt={image.description} />
              </span>
              
              { image.description ? (
              <span className="ListImages-item-description">
                {image.user.name} - {image.description}
              </span>
              ) : (
              <span className="ListImages-item-description">
                Image by {image.user.name}
              </span>
              ) }
            </a>
          </li>
          ))}
        </ul>
      );
    }
  }

}

export default ListImages;
