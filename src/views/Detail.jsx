import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Detail(props) {
  const { id} = useParams();
  const { character , setCharacter} = props;
  
  useEffect(() => {
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
  
  return (
    <div>
      <h1>{character.id}</h1>

   
      <h2>{character.name}</h2>
      <h3>{character.gender}</h3>
      <img alt="Hola" src={character.image} />
      {/* <h4>{props.origin?.name}</h4> */}
      <h3>{character.species}</h3>
     
    </div>
  );
}

export default Detail;
