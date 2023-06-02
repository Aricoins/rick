import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Favorites = ({myFavorites}) => {
  return (
    <div>
         {myFavorites.map(({id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites})=> <Card 
  key= {id}
  id={id}
  name ={name}
  status={status}
  species={species}
  gender={gender}
  origin={origin}
  image={image}
  removeFav={removeFav}
  />)}
              </div>
  )
}

function mapStateToProps(state){
return{ myFavorites: state.myFavorites}    
}

export default connect(mapStateToProps)(Favorites)
