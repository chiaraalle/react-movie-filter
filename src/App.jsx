/*Create un nuovo progetto React e implementate un sistema di filtro per una lista di film in base al genere.
L'array dei film è già fornito:
Dovrete utilizzare lo stato e useEffect per gestire il filtraggio dinamico.
Per oggi diamo priorità alla logica e alla gestione dello stato. Una volta funzionante, possiamo pensare allo stile!
Note
Il filtro deve funzionare dinamicamente quando l'utente seleziona un genere dalla select.
Se non viene selezionato alcun genere, devono essere mostrati tutti i film.
BONUS:
Aggiungere un campo di ricerca per filtrare i film anche per titolo.
Creare un sistema per aggiungere nuovi film alla lista tramite un form. */
const initialMovies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]
import { useState, useEffect } from "react";

function App() {
  //costante per la lista dei film filtrati
  const [movies, setMovies] = useState(initialMovies);
  //costante per genere da selezionare nella select
  const [genre, setGenre] = useState('');
  //filtro di ricerca per titolo del film
  const [search, setSearch] = useState('')
  const [filteredMovies, setFilteredMovies] = useState( initialMovies); 

  //useEffect che si attiva al cambio del genere selezionato
  useEffect(() => {
    if(genre === '') {
      setMovies(initialMovies);
    } else {
      const filteredMovies = initialMovies.filter((movie) => movie.genre === genre);
      setMovies(filteredMovies);
    }
  }   , [genre]);

  //useEffect per filtrare i film in base al titolo
    /*useEffect(() => {
      if(search === '') {
        setFilteredMovies(initialMovies);
    } else {
      const filteredMovies = initialMovies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));
      setFilteredMovies(filteredMovies);
    }
  }   , [search]);*/


  return (
    <>
    <div className="Container">
      <h1>Lista dei film</h1>
      
      {/*select per selezionare il genere*/}
      <div className="select-container">
        <select className="form-control" name="" id="" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Tutti</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
      </div>

      {/*input per la ricerca del titolo del film
      <div className="search-container">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cerca per titolo"/>

      </div>*/}
      
      {/*lista dei film*/}
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title} - {movie.genre}</li>
        ))}
      </ul>

      {/*lista dei film filtrati per titolo
      <ul>
        {filteredMovies.map((filteredMovie, index) => (
          <li key={index}>{filteredMovie.title} - {filteredMovie.genre}</li>
        ))}
      </ul>*/}
    </div>
     
    </>
  )
}

export default App
