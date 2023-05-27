import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";

const ImagenBrilla = styled.h2`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 1em;
  justify-content: center;
  border-radius: 10%;
  transition: 1s;
  :hover {
    filter: brightness(1.2);
    width: 83%;
   }
`;

const EstiloDiv = styled.div`
text-align: center;
  background-color: rgba(233, 138, 15, 0.5);
  /* display: grid;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2; */
  font-size: 0.8em;
  padding: 1em;
  margin: 1em;
  box-shadow: 0em 1em 2em 0.5em;
  height: 18em;
  border-radius: 1em;
  justify-content: center;
  align-content: center;
  font-size: 2em;
  `;
const StyleLink = styled(NavLink)`
  font-size: 1em;
  color: white;
  text-decoration: none;
  transition: 1s;
  :hover {
    background-color: #4dcceb45;
    color: black;
    cursor: pointer;
  }
`;
const BotonBorde = styled.button`
  background-color: #fd0909;
  display: flex;
  align-content: space-around;
  height: 9%;
  width: 10%;
  padding: 2%;
  margin-left: 80%;
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


`;

export default function Card(props) {

   return (
    <EstiloDiv> <BotonBorde onClick={() => { props.eliminarPersonaje ()}} >X</BotonBorde>
      <StyleLink to ={`/detail/${props.id}`}>{props.name}</StyleLink>
      
      <ImagenBrilla>
       <img src={props.image} alt="Acá debería verse la imagen del perdonaje"  />
      </ImagenBrilla>
      <H3>{props.species}</H3>
      <H3>{props.gender}</H3>
      <H3>{props.id}</H3>
    </EstiloDiv>
  );
}

