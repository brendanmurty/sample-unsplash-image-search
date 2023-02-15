import image from 'assets/image.svg';
import './App.css';
import SearchField from 'components/SearchField/SearchField';
import UnsplashImageSearch from 'components/UnsplashImageSearch/UnsplashImageSearch';
import { useState } from 'react';

function App() {

  const [queryText, setQueryText] = useState("");

  let queryInputHandler = (event) => {
    setQueryText(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p>
          Search Unsplash images
        </p>
        <SearchField onChange={queryInputHandler} />
        <UnsplashImageSearch query={queryText} />
      </header>
    </div>
  );
}

export default App;
