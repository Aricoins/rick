import { useState } from "react";
import styled from "styled-components";
import React from "react";

const ImagenBrilla =styled.h2 `
opacity: 2; 
   :hover{
      filter: brightness(1.2)
     
   }
`
const EstiloDiv=styled.div`
background-color: #131016; 
display: inline-flex;
height: 45%;
border-radius: 10px;
opacity: 0.9;

`


const Style = styled.h2`

color: white;
:hover{
background-color: #7b0808 ;
-webkit-text-stroke: 1px white;
color: black;
cursor: pointer;
}
`

const BotonBorde = styled.button`
background-color: #4a0505 ;
align-content: flex-end;
height: 5%;
width: 8%;
padding: 2%;
color: #e1d9d9;
margin-left: 80%;
border-color: #e1d9d9;
cursor: pointer;
`
const Propss = styled.h3`
text-shadow: 1px  0px 0px ,
               1px  1px 0px white,
              -1px  0px 0px white,
               1px -1px 0px white;
               :hover{
                  background-color: azure;
                  cursor: pointer;
               }
`




export default class Card extends React.Component {
   constructor(props){
super(props); 
this.state= {
 mostrar: true
}

 
}
componentWillUnmount(){
   this.state.mostrar=false
   console.log("chau")
   
}
// onButtonClick(e){
// this.setState({
//    contador: this.state.contador +1
// },

// console.log(this.state.contador)

// );
// }
 
   render(){
      return(
     <EstiloDiv> <div>
        <BotonBorde onClick={this.componentWillUnmount}> X </BotonBorde>
         <Style><h2>{this.props.name}</h2></Style>
         <Propss> <h3>{this.props.species}</h3></Propss>
         <Propss><h3>{this.props.gender}</h3></Propss>
         <Propss><h3>ID: {this.props.id}</h3></Propss>
         <ImagenBrilla><img src={this.props.image} alt="Acá debería verse una imagen" /></ImagenBrilla>
      </div></EstiloDiv>
      );
}
}
