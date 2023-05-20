import React from "react"
import { useState } from "react";
import styled from "styled-components"

const WelcomeCard = styled.div`
  background-color: black;
  font-size: 0.8em;
  padding: 1em;
  margin: 1em;
  box-shadow: 0em 1em 2em 0.5em;
  height: 12em;
  border-radius: 1em;
  opacity: 0.9;
  width: 60%;
  border-color: aliceblue;
  border: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyleLink = styled.div`
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
  background-color: #140202;
  display: flex;
  align-content: center;
  height: 10%;
  width: 10%;
  padding: 2%;
  margin-left: 80%;
  color:white;
  cursor: pointer;
  :hover{
    background-color: #07f907;
    color: black;
  }
`;

const H1 = styled.h1`
color:white;
display: flex;

`;


export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  function validateUser(value) {
    if(!/\S+@\S+\.\S+/.test(value)) {
      setError('el usuario tiene que ser un email');
    } else {
      setError('');
    }
    setUsername(value);
  }
  return (
      <WelcomeCard>
        <H1>Henrick App</H1>
        <form>
        <input className={error && 'danger'}
                name="username" 
                value={username} 
                placeholder="username" 
                onChange={(e) => validateUser(e.target.value)} 
                />
        {!error ? null : <span>{error}</span>}

        <input name="password" 
                value={password} 
                placeholder="password" 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                />
        <input type="submit" />
 
        </form> 
        
        </WelcomeCard>
    );
}
