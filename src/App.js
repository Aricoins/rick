import React from 'react'
import './App.css'
import axios from 'axios'
import Nav from "./components/Nav.jsx"
import Cards from './components/Cards.jsx'
import { useState } from 'react'
import Detail from './views/Detail'
import { Route, Routes, useParams } from 'react-router-dom'
import About from './views/About'
import "./index.css"
import  Form  from './components/Form.jsx'




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
  
   <>             

      <Form path ="/"/> 
      <Nav path ="/"  searchUser={searchUser} />
        <Routes>
        <Route className="aboutStyle" path="/about" element={ <About  display="flex"
  justify-content= "center"
  align-items= "center"/>}/>
        <Route path="/home" element={<Cards character={character} eliminarPersonaje={eliminarPersonaje}/>}/>
       
        <Route path="/detail/:id" element={<Detail id={id} character={character} setCharacter={setCharacter} eliminarPersonaje={eliminarPersonaje} />}/>
       

    </Routes>
   </>
   
  )
      }

export default App
