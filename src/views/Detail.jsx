import { useParams } from "react-router-dom";
<<<<<<< HEAD
import { useEffect } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> f8aa6c6f5d931f3aa85a57c2b63c06990c351645
import axios from "axios";
import styled from "styled-components";
// import img from "./gif/imagen.jpeg"

const Onda = styled.div`

opacity: 80%;
background-color: black;
color: #0afe0a



`
const Rojo = styled.h3`
   
color: red; 

`
const Datos=styled.ul`
   display: flex;
   flex-direction: column;


`
function Detail(props) {
  const { id} = useParams();
  const { character , setCharacter} = props;
  
  useEffect(() => {
<<<<<<< HEAD
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
}, [id, setCharacter]);
=======
          axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch((error) => {
        console.error(error);
        window.alert('Ocurrió un error al cargar el personaje');
      });
  }, [id]);
>>>>>>> f8aa6c6f5d931f3aa85a57c2b63c06990c351645
  
  return (<>
   <h1>{id}</h1>
      <img alt="Hola" src={character.image} /> 
   <Onda><Datos>
      <Rojo>Nombre |</Rojo><h3>{character.name}</h3>
     <Rojo>Género |</Rojo>  <h3>{character.gender}</h3>
     
      {/* <h4>{props.origin?.name}</h4> */}
     <Rojo>Especie |</Rojo> <h3>{character.species}</h3>
    
      <Rojo>Episodio |</Rojo><div> {character.episode}</div>
      </Datos>
    
      {/* <div>{character.result.dimension}</div> */}
     
    </Onda>
    
      </>
  );
}

export default Detail;
