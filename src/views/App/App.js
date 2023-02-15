import image from 'assets/image.svg';
import './App.css';
import SearchField from 'components/SearchField/SearchField';
import ListImages from 'components/ListImages/ListImages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p>
          Search Unsplash images
        </p>
        <SearchField />
        <ListImages />
      </header>
    </div>
  );
}

export default App;
