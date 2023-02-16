// eslint-disable-next-line
import { Component, setState } from 'react';

import image from 'assets/image.svg';
import './App.css';
import SearchField from 'components/SearchField/SearchField';
import ListImages from 'components/ListImages/ListImages';
import UnsplashApiRequest from 'common/UnsplashApiRequest';

/**
 * View: App
 * 
 * The main page for this sample app, which shows a heading, search field
 * and a list of image results based on the text value of the search field.
 * 
 **/
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageResults: [],
      isProcessing: false
    };

    this.searchQuery = this.searchQuery.bind(this);
  }

  searchQuery(event) {
    // Send a API request only if the text field is non-empty and
    // the system is not currently completing another request
    if (!this.state.isProcessing) {
      if (event.target.value) {
        // We have a search query

        // Set the processing state to avoid sending another API
        // request before this request has completed
        this.setState({ isProcessing: true });

        UnsplashApiRequest('search/photos', ['per_page=32', 'query=' + event.target.value])
          .then(
            (response) => {
              // At this point, "response" could be empty for various reasons
              // but for the purposes of this sample project, these states aren't
              // handled. In a production-ready system, this should also catch errors
              // that could occur if the API was unreachable or the API key didn't work.
              this.setState({
                imageResults: response.results ? response.results : [],
                isProcessing: false
              });
            }
          );
      } else {
        // Search query is empty, clear the image results
        this.setState({
          imageResults: []
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-content">
            <img src={image} className="App-logo" alt="logo" />
            <p>
              Search <a href="https://unsplash.com/">Unsplash</a> images for
            </p>
            <SearchField onChange={this.searchQuery} />
          </div>
        </header>
        <main className="App-content">
          <ListImages images={this.state.imageResults} />
        </main>
      </div>
    );
  }
}

export default App;
