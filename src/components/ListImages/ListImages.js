import { Component } from "react";
import "./ListImages.css";

/**
 * Component: ListImages
 * 
 * Constructs a list of images based on the list of results passed to the
 * component. Note that each item in "props.images" will have identical properties
 * to a "photo" result detailed here: https://unsplash.com/documentation#get-a-photo
 * 
 **/
class ListImages extends Component {

  render() {

    return (
      <div className="ListImages-container">
        <ul className="ListImages-list">
          {this.props.images.map(image => (
          <li key={image.links.html.toString() }>
            <a
              target="_blank"
              rel="noreferrer"
              href={image.links.html}>
              <span className="ListImages-item-image">
                {image.description ? (
                <img src={image.urls.small} alt={image.description} title={image.user.name + ' - ' + image.description } />
                ) : (
                <img src={image.urls.small} alt={'Image by ' + image.user.name} title={'Image by ' + image.user.name} />
                )}
              </span>
            </a>
          </li>
          ))}
        </ul>
      </div>
    );
  
  }

}

export default ListImages;
