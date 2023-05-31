import React from 'react';
import Card from './Card';
import './cards.css'
import imagen from "../views/gif/rick.gif"
import styled from 'styled-components';


const Background = styled.div`

background-image: url(${imagen});
background-repeat: no-repeat;
background-attachment: fixed;
background-size: 30%;
background-position: center

`

export default function Cards(props) {
   const { characters , eliminarPersonaje} = props;
   const lista = characters.map((e) => (
         <Card 
         key= {e.id}
            id={e.id}
            name={e.name} 
            image={e.image} 
            species={e.species} 
            gender={e.gender}
            eliminarPersonaje={() => eliminarPersonaje(e.id)}
         />
        
   ))
  
     return (
<Background>
      <div className='lista'>
         {lista}
      </div>
</Background>

   );
     }