import { Component } from "react";
import ListImages from 'components/ListImages/ListImages';

class UnsplashImageSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      empty: true,
      images: []
    }
  }

  render() {
    if (this.props.query) {
      fetch(process.env.REACT_APP_UNSPLASH_API_URL + 'search/photos/?client_id=' + process.env.REACT_APP_UNSPLASH_API_KEY + '&query=' + this.props.query)
        .then(response => response.json())
        .then(
          (response) => {
            // Valid response in JSON format
            this.setState({
              empty: false,
              images: response.results
            });
          },
          (error) => {
            // Error encountered
            this.setState({
              empty: false,
              error: true
            });
          }
        );
    }


    const { error, empty, images } = this.state;


    if (error) {
      return <p className="error">{error}</p>;
    } else if (!empty) {
      // Show a list of the photos returned from the API
      return (
        <ListImages images={images} />
      );
    }
  }
}

export default UnsplashImageSearch;
