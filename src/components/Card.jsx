import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";



const ImagenBrilla = styled.h2`
  width: 100%;
  display: flex;
  flex-direction: column;
  :hover {
    filter: brightness(1.2);
  }
`;

const EstiloDiv = styled.div`
  background-color: #131016;
  display: flex;
  flex-direction: column;
  width: 30%;
  border-radius: 10px;
  opacity: 0.9;
  font-size: small;
  height: 15%;
  justify-content: center;
`;

const Style = styled.h2`
  color: white;
  :hover {
    background-color: #4dcceb45;
    -webkit-text-stroke: 1px white;
    color: black;
    cursor: pointer;
  }
`;

const BotonBorde = styled.button`
  background-color: #fd0909;
  display: flex;
  align-content: flex-end;
  height: 5%;
  width: 10%;
  padding: 2%;
  color: #a19f9f;
  margin-left: 80%;
  border-color: #a19f9f;
  cursor: pointer;
`;

const H3 = styled.h3`
  text-shadow: 1px 0px 0px, 1px 1px 0px white, -1px 0px 0px white,
    1px -1px 0px white;
  :hover {
    background-color: azure;
    cursor: pointer;
  }
`;
export default function Card(props) {

   return (
    <EstiloDiv>
      <BotonBorde onClick={() => { props.eliminarPersonaje ()}} >X</BotonBorde>
      <Style><Link to ={`/detail/${props.id}`}>{props.name}</Link></Style>
      <H3>{props.species}</H3>
      <H3>{props.gender}</H3>
      <H3>{props.id}</H3>
      <ImagenBrilla>
       <img src={props.image} alt="Acá debería verse la imagen del perdonaje"  />
      </ImagenBrilla>
    </EstiloDiv>
  );
}

