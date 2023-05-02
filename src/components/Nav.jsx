import SearchBar from './SearchBar.jsx'
import React from 'react'

export default function Nav (props){

    return(

        <SearchBar  searchUser={props.searchUser} />
    )
}