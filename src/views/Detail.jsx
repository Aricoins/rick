
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
// import img from "./gif/imagen.jpeg"

const Onda = styled.div`
opacity: 80%;
<<<<<<< HEAD
background-color: #423b3b;
color: #181814;
width: 25em;
font-size: 0.8em;
  padding: 1em;
  margin: 1em;
  box-shadow: 0em 1em 2em 0.5em;
  border-radius: 1em;
  opacity: 0.9;
  justify-content: center;
  align-content: center;
=======
background-color: white;
color: #0afe0a;
widht: 25%;
padding: 2%;
>>>>>>> 093908215d5d713bace68600c29606bf3ed66964
`
const Rojo = styled.h3`
  
color: red; 
`
const Datos=styled.ul`
<<<<<<< HEAD
color: #f5f4f7;
width: 2em;

=======
   display: flex;
   flex-direction: column;
>>>>>>> 093908215d5d713bace68600c29606bf3ed66964
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
        
  return (<>
  <div style={{display: "flex", justifyContent: "center"}}>
   <Onda><Datos>
   <h1>{id}</h1>
      <img style={{width:"20em"}} alt="Imagen del personaje" src={character.image} /> 
      <Rojo>Nombre |</Rojo><h3>{character.name}</h3>
     <Rojo>Género |</Rojo>  <h3>{character.gender}</h3>
     
      {/* <h4>{props.origin?.name}</h4> */}
     <Rojo>Especie |</Rojo> <h3>{character.species}</h3>
    
      <Rojo>Episodio |</Rojo><div> {character.episode}</div>
      </Datos>
    
      {/* <div>{character.result.dimension}</div> */}
     
    </Onda>
    </div>
    
      </>
  );
}

export default Detail;
