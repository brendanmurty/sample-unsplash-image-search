import { Component, setState } from 'react';
import image from 'assets/image.svg';
import './App.css';
import SearchField from 'components/SearchField/SearchField';
import ListImages from 'components/ListImages/ListImages';
import UnsplashApiRequest from 'common/UnsplashApiRequest';

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
    if (event.target.value && !this.state.isProcessing) {
      this.setState({ isProcessing: true });

      UnsplashApiRequest('search/photos', ['per_page=32', 'query=' + event.target.value])
        .then(response => response.json())
        .then(
          (response) => {
            this.setState({
              imageResults: response.results ? response.results : [],
              isProcessing: false
            });
          }
        );
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={image} className="App-logo" alt="logo" />
          <p>
            Search Unsplash images
          </p>
          <SearchField onChange={this.searchQuery} />
          <ListImages images={this.state.imageResults} />
        </header>
      </div>
    );
  }
}

export default App;
