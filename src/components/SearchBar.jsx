import styled from "styled-components";
import React from "react";
import { useState } from "react";


const Barra = styled.nav`
padding: 5%;
padding-bottom: 6%;
border-radius: 10px;
border-color: black;
display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: end;
`;

const Input= styled.input`
   
border-color: aqua;
height: 2rem;
width: 25%;`

const Boton = styled.button`
  display: inline-block;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  width: 25%;
  height: 2rem;
  background-color: #18ef3c;
  color: #050000;
  font-size: large;
  border-color: aqua;
  border-bottom: aqua;
   :hover {
    background-color: #0a0808;
    color: #f8f1f1;
    cursor: pointer;
  }
`;

export default function SearchBar(props) {
  const [id, setId] = useState('');

  const ingreso = (event) => {
    setId(event.target.value);
  };

  return (
    <Barra>
         <Input type='search' onChange={ingreso} />
        <Boton onClick={() => { props.searchUser(id) }}>Agregar</Boton>
      
    </Barra>
  );
}
