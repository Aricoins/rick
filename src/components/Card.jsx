import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";

const Carta = styled.div`
  
  background-color: rgba(255,255,255,.3);
border-width: 5px;
border-color: black;
padding: 2%;
margin: 2%;
display: column;
justify-content: center;
align-items: flex-end;
`


const ImagenBrilla = styled.h2`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0.5em;
  justify-content: center;
  border-radius: 10%;
  transition: 1s;
  opacity: 1;
  :hover {
    filter: brightness(1.2);
    width: 83%;
   }
`;

const EstiloDiv = styled.div`
  width: 90%;
  background-color: rgba(4, 79, 72, 0.715);
  display: flex;
  flex-direction: column ;
  justify-content: center;
  margin: 0.5em;
  box-shadow: 0em 1em 2em 0.5em;
  border-radius: 1em;
  align-self: center;
  align-items: center;
  align-content: center;
  opacity: 1;
  `;

const StyleLink = styled(NavLink)`
   color: #f2f5f4;
  text-decoration: none;
  text-align: center;
  transition: 1s;
  background-color: red;
  align-self: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  opacity: 1;
  :hover {
  
    background-color: #4dcceb45;
    color: black;
    cursor: pointer;
    opacity: 1;
  }
`;
const BotonBorde = styled.button`
  background-color: #fd0909;
  display: flex;
  color: white;
  height: 8%;
  width: 15%;
  margin: 5%;
  opacity: 1;
  cursor: pointer;
  :hover{
    background-color: #eeabab;
    color:white;
  }
`;
const H3 = styled.h3`
color:white;
display: flex;
justify-content: center;
margin: 1%;
opacity: 1;

`;

const Banda = styled.div`
  background-color: red;
 display: flex;
 padding: 10%;
 opacity: 1;
  :hover {
    background-color: #4dcceb45;
    color: black;
    cursor: pointer;
  }
`;


export default function Card(props) {

   return (
 <Carta>
 <BotonBorde onClick={() => { props.eliminarPersonaje ()}}> X </BotonBorde>
 <EstiloDiv>
<Banda>     
  <StyleLink to ={`/detail/${props.id}`}>{props.name}</StyleLink>
</Banda>
      <ImagenBrilla>
       <img src={props.image} alt="Acá debería verse la imagen del perdonaje"  />
      </ImagenBrilla>
      <H3>{props.species}</H3>
      <H3>{props.gender}</H3>
      <H3>{props.id}</H3>
    </EstiloDiv>
    </Carta> );
}

