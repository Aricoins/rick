import React from "react"
import { useState } from "react";
import styled from "styled-components"
import imagen from "../views/gif/ImagenW.jpeg"

const Contenedor= styled.div`
    display: grid;
    text-align: center;
    grid-template-columns: 20% 30% 30% 20%;
    max-width: 80%;
justify-content: space-around;
height: 80%;
@media only screen and (max-width : 900px) {
border-color: aliceblue;
 border: 20%;
 display: grid;
 grid-template-columns: 100%; 
 grid-template-rows: 100%;
 grid-row-start: 3;
 width: 180px;
 gird
 text-align: center;
 justify-content: center;
 align-content: center;
}


`

const WelcomeCard = styled.div`
text-align: center;
background-color: black;
color: white;
max-width: 80%;
 font-size: 0.8em;
  padding: 1em;
  margin: 1em;
  box-shadow: 0em 1em 2em 0.5em;
    max-height: 90%;
  border-radius: 1em;
  opacity: 0.9;
  flex-direction: column;
  grid-column-start: 3;
  @media only screen and (max-width : 900px){
width: 22em;
margin-top: 50px;
margin-bottom: 50px;
justify-content: center;
text-align: center;


  }
  `;


const BotonBorde = styled.input`
flex-direction: column;
background-color: #d6e909;
  align-content: center;
  height: 10%;
  width: 100%;
  padding: 2%;
  color: #080000;
  cursor: pointer;
  :hover{
    background-color: #07f907;
    color: #090000;
  }
`;
const ImagenW = styled.img`
       max-width: 50%;
`
const BotonIn = styled.input`
background-color: #f7f7f6;
left:0;
right: 0;
margin: auto;
`;

const H1 = styled.h1`
color:white;
display: flex;
`;

const Formulario= styled.form`
 max-width: 80%;
 max-height: 80%;
`

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const [access, setAccess]=useState(false)

//   let EMAIL="arielgarcia@gmail.com"
//   let PASSWORD="holasoyy0"
  const [error, setError] = useState('');

// function login (userData){

//     if (access === true) 
//     return 
// }

  function handleChange(){
    setUsername(username.value)  
}






  function validateUser(value) {
    if(!/\S+@\S+\.\S+/.test(value)) {
      setError('el usuario tiene que ser un email');
    } else {
      setError('');
    }
    setUsername(value);
  }
  return ( <Contenedor>
      <WelcomeCard>
      <H1>Henrick App</H1>
       <ImagenW src={imagen}/>
       <h2> Los 827 personajes de Rick & Morty</h2>
        <Formulario>
            <div> <label>Ingrese un e-mail:</label>
        <BotonIn className={error && 'danger'}
                name="username" 
                value={username} 
                placeholder="username" 
               onChange={ (e) => { handleChange(); validateUser(e.target.value); } }
               
               />

            </div>
        {!error ? null : <span>{error}</span>}

        <div> <label>Ingrese una contraseña:</label>

        <BotonIn name="password" 
                value={password} 
                placeholder="password" 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                />
</div>
<div> <label>Ingresar</label>
             <BotonBorde type="submit" text="ingresar"/>
         
             </div>
         </Formulario> 
        
        </WelcomeCard>
        </Contenedor>
    );
}
