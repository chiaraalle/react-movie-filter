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
import { useState, useEffecct } from "react";

function App() {
  //costante per la lista dei film filtrati
  const [movies, setMovies] = useState(initialMovies);
  //costante per genere da selezionare nella select
  const [genre, setGenre] = useState('');

  return (
    <>
    <div className="Container">
      <h1>Lista dei film</h1>
      {/*lista dei film*/}
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title} - {movie.genre}</li>
        ))}
      </ul>
    </div>
     
    </>
  )
}

export default App
