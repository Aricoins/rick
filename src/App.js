import React from 'react'
import './App.css'
import axios from 'axios'
import Nav from "./components/Nav.jsx"
import Cards from './components/Cards.jsx'
import { useState } from 'react'


function App() {
  const [characters, setCharacters] = useState([])

  function searchUser(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
  }

  function eliminarPersonaje(id) {
    const nuevosPersonajes = characters.filter((personaje) => personaje.id !== id);
    setCharacters(nuevosPersonajes);
  }

  return (
    <div className='App'>
      <div>
        <Nav
          searchUser={searchUser}
        />
          <Cards
          characters={characters} eliminarPersonaje={eliminarPersonaje} />
     
          <hr />
      </div>
      
      </div>
  )
  }
export default App
