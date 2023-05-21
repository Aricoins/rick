
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
// import img from "./gif/imagen.jpeg"

const Onda = styled.div`
background-color: #060000;
color:white;
width: 22em;
  padding: 1em;
  margin: 1em;
  box-shadow: 0em 1em 2em 0.5em;
  border-radius: 1em;
  opacity: 0.9;
  height: 100%;
  left:0;
  right:0;
  margin:auto;
  justify-content: center;
  align-items: center;
 
`
const Propiedades = styled.h3`
  justify-content: center;
color: red; 
`

function Detail(props) {
  const { id} = useParams();
  const { character , setCharacter} = props;
  
  useEffect(() => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
}, [id, setCharacter]);
        console.log(character)
  return (<>
    <Onda>
    <Propiedades>Nombre :</Propiedades>{character.name}
      <h1>{id}</h1>
      <img style={{width:"80%"}} alt="Imagen del personaje" src={character.image} /> 
    
     <Propiedades>Género :</Propiedades>  {character.gender}
     
      {/* <h4>{props.origin?.name}</h4> */}
     <Propiedades>Especie :</Propiedades> {character.species}
    
      <Propiedades>Episodio:</Propiedades> {character.episode}
      
    
      {/* <div>{character.result.dimension}</div> */}
     
    </Onda>
    
      </>
  );
}

export default Detail;
