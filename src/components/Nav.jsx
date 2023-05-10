import SearchBar from './SearchBar.jsx'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Navigator= styled.div`
   display: flex;
   justify-content: space-between;
background-color: black ;
padding: 1%;
opacity: 0.9;
align-items: center;

`
const Botones = styled.button`
   background-color: #f3e706; 
    border: none;
    color: #080202;
   width: 15%;
   opacity: 1;
   height: 2.5em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 8%;
    transition-duration: 0.2s;
     :hover{
        background-color: white;
        border-color: #f3e706;
        border-bottom: #f3e706;
        border-style: inset;
        -webkit-text-stroke: 1px white;
      
    }


`
const StyledLink = styled(Link)`
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
  `
export default function Nav (props){

    return(
        <><Navigator>
       <Botones> <StyledLink to="/about"> About</StyledLink> </Botones>
       <Botones> <StyledLink to="/home">Henrick App</StyledLink></Botones>
       <SearchBar  searchUser={props.searchUser} />
       </Navigator> </>
              )
}