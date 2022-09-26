import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);


  function fetchPkmns() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        setPokemons(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => console.log(error));

  }

  return (
    <div className="App">
      <div>
        <button onClick={fetchPkmns}>Fetch Pokemon</button>
      </div>
      {pokemons.map(pokemon => (

        <p key={pokemon.name}> {pokemon.name}</p>

      ))}
    </div>
  );
}

export default App;
