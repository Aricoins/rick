import React from 'react'
import './App.css'
import axios from 'axios'
import Nav from "./components/Nav.jsx"
import Cards from './components/Cards.jsx'
import { useState } from 'react'
import Detail from './views/Detail'
import { Route, Routes, useParams } from 'react-router-dom'
import About from './views/About'
import Formulario from './components/Form'


function App() {
  const [character, setCharacter] = useState([])
const {id} = useParams()

  function searchUser(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
  }

  function eliminarPersonaje(id) {
    const nuevosPersonajes = character.filter((personaje) => personaje.id !== id);
    setCharacter(nuevosPersonajes);
  }



  return (
    <div className='App'>
    
        <Routes>
            <Route path ="/"  element={<Formulario/> }/>
            <Route path="/home" element={<><Nav searchUser={searchUser}/><Cards character={character} eliminarPersonaje={eliminarPersonaje}/></>}/>
             <Route className="aboutStyle" path="/about" element={<><Nav searchUser={searchUser}/> <About  display="flex"
                  justify-content= "center"
                  align-items= "center"/></>}/>
           
        <Route 
        path="/detail/:id" 
        element={<><Nav searchUser={searchUser}/><Detail id={id} character={character} setCharacter={setCharacter} eliminarPersonaje={eliminarPersonaje}/></>}       
/>
    </Routes>
</div>
   
  )
      }

export default App
