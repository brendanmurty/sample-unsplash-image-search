import { Component } from "react";

import "./RandomImage.css";
import UnsplashApiRequest from 'common/UnsplashApiRequest';

/**
 * Component: RandomImage
 * 
 * Constructs an interesting display of a random image from Unsplash.
 * 
 * Currently, this is used as a way to show a more intersting empty state
 * for the user.
 * 
 **/
class RandomImage extends Component {

  constructor(props) {

    super(props);

    this.state = {
      image: false,
      isProcessing: false
    };

  }

  componentDidMount() {

    if (!this.state.isProcessing) {
      this.setState({
        isProcessing: true
      });

      UnsplashApiRequest('photos/random', [])
        .then(
          (response) => {
            console.log('response urls regular', response.urls.regular);

            // At this point, "response" could be empty for various reasons
            // but for the purposes of this sample project, these states aren't
            // handled. In a production-ready system, the "UnsplashApiRequest" function
            // would should also catch various error states.
            this.setState({
              image: response ? response : false,
              isProcessing: false
            });
          }
        );
    }

  }

  render() {

    if (!this.state.isProcessing && this.state.image) {
      return (
        <div className="RandomImage-container">
          <img
            className="RandomImage-image"
            src={this.state.image.urls.regular}
            alt={this.state.image.description}
            title={'Image by ' + this.state.image.user.name}/>
          <a 
            className="RandomImage-link"
            target="_blank"
            rel="noreferrer"
            href={this.state.image.links.html}>
            Image by {this.state.image.user.name}
          </a>
        </div>
      );
    }

  }

}

export default RandomImage;
