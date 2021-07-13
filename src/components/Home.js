import React, {useState} from 'react';
import '../App.css';
import MoviesData from "./MoviesData";
import MoviesList from './MovieList/MovieList';
import AddMovie from './AddMovie/AddMovie';
import SearchMovie from './SearchMovie/SearchMovie';

function App() {
  const [moviesList, setMoviesList] = useState(MoviesData);
  const [searchByName, setSearchByName] = useState('');
  const [searchByRate, setSearchByRate] = useState(1);

  const addMovie = (x) => {
    setMoviesList([...moviesList,x])
  }

  return <div className="App">
  <SearchMovie setSearchByName={setSearchByName} 
    searchByRate={searchByRate}
    setSearchByRate={setSearchByRate}
  />
  <div style={{ display : 'flex', justifyContent: 'center' }}>
    <AddMovie addMovie={addMovie} />
  </div>
  <MoviesList moviesList={moviesList} searchByName={searchByName} searchByRate={searchByRate}/>
  {/* hhh */}
  
</div>

  
};

export default App;
