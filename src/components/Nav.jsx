import SearchBar from './SearchBar.jsx'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'



const Navigator= styled.div`
   display: flex;
   justify-content: center;
background-color: black ;
padding: 1%;
opacity: 0.9;
align-items: center;
@media screen and (max-width : 900px) {
  flex-direction: column;
  
}
`
const Botones = styled.button`
border-style: solid;
border-color: yellow;
color: black;
background: #e4d8d8;
box-shadow:  2px 2px 6px #c2b8b8,
       -2px -2px 20px #fff8f8;
width: 15%;
text-align: center;
display: inline-block;
  border-radius: 8%;
  transition-duration: 1s;
  font-size: 2em;
     :hover{
      color:black;
      width: 28%;
        background-color: #0df30d;
        border-color: #f3e706;
        border-bottom: #f3e706;
        border-style: inset;
        -webkit-text-stroke: 1px white;
      
     }
     @media  only screen and (max-width : 900px){
 
padding: 20px;
width: 100% }


`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  border-width: 1px;
  border-color: yellow;
  font-size: 20px ;
  color: black;
  background: #e4d8d8;
  font-size: 80%;
  :active {
    background-color: #000703;
    font-weight: bold;
    color: #e4d8d8;
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