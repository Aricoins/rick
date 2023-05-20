import SearchBar from './SearchBar.jsx'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import "./Nav.css"


const Navigator= styled.div`
   display: flex;
   justify-content: space-between;
background-color: black ;
padding: 1%;
opacity: 0.9;
align-items: center;

`
const Botones = styled.button`
border-style: solid;
border-color: yellow;
color: black;
background: #e4d8d8;
box-shadow:  20px 20px 60px #c2b8b8,
       -20px -20px 60px #fff8f8;
width: 15%;
text-align: center;
display: inline-block;
  font-size: 16px;
  border-radius: 8%;
  transition-duration: 1s;
     :hover{
      color:black;
      width: 28%;
        background-color: white;
        border-color: #f3e706;
        border-bottom: #f3e706;
        border-style: inset;
        -webkit-text-stroke: 1px white;
      
    }


`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  border-width: 1px;
  border-color: yellow;
  font-size: 20px ;
  color: black;
  background-color: yellow;
  active {
    background-color: yellow;
    font-weight: bold;
    color: black;
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