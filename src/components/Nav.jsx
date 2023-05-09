import SearchBar from './SearchBar.jsx'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Botones = styled.button`
     background-color: #57dd5b; /* Green */
    border: none;
    color: #a3e2ef;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    width: 25%;
    height: 15%;
    :hover{
        background-color: white;
    }


`

export default function Nav (props){

    return(
        <>
       <Botones> <Link to="/about"> About</Link> </Botones>
       <Botones> <Link to="/home">Home </Link></Botones>
       <SearchBar  searchUser={props.searchUser} />
                </>
              )
}