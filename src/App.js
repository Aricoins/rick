import React from 'react'
import './App.css'
import axios from 'axios'
import Nav from "./components/Nav.jsx"
import Cards from './components/Cards.jsx'
import { useState } from 'react'
import Detail from './views/Detail'
import { Route, Routes, useParams } from 'react-router-dom'
import About from './views/About'
import VideoPlayer from "react-background-video-player";





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
      <VideoPlayer
        className="video"
        src={
          "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
        }
        autoPlay={true}
        muted={true}
      />
      <div>
    
      <Nav path ="/"  searchUser={searchUser} />
        <Routes>
                <Route path="/about" element={ <About/>}/>
        <Route path="/home" element={<Cards character={character} eliminarPersonaje={eliminarPersonaje}/>}/>
        <Route path="/detail/:id" element={<Detail id={id} character={character} setCharacter={setCharacter} eliminarPersonaje={eliminarPersonaje} />}/>



        </Routes>
      </div>
      </div>
  )
  }
export default App
