import styled from "styled-components";
import React from "react";



const ImagenBrilla = styled.h2`
  opacity: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: self-start;
  :hover {
    filter: brightness(1.2);
  }
`;

const EstiloDiv = styled.div`
  background-color: #131016;
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: center;
  height: 45%;
  border-radius: 10px;
  opacity: 0.9;
`;

const Style = styled.h2`
  color: white;
  :hover {
    background-color: #7b0808;
    -webkit-text-stroke: 1px white;
    color: black;
    cursor: pointer;
  }
`;

const BotonBorde = styled.button`
  background-color: #4a0505;
  align-content: flex-end;
  height: 5%;
  width: 8%;
  padding: 2%;
  color: #e1d9d9;
  margin-left: 80%;
  border-color: #e1d9d9;
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
      <Style>{props.name}</Style>
      <H3>{props.species}</H3>
      <H3>{props.gender}</H3>
      <H3>{props.id}</H3>
      <ImagenBrilla>
       <img src={props.image} alt="Acá debería verse una imagen" />
      </ImagenBrilla>
    </EstiloDiv>
  );
}

