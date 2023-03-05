import styled from "styled-components";


const EstiloDiv=styled.div`
background-color: #020005 ;
display: inline-flex;
height: 45%;
color: white;

`


const Style = styled.h2`
background-color: #636563;
color: white;
:hover{
background-color: #f256b3;
color: black;

}
`


const ImagenBrilla =styled.h2 `
   :hover{
      filter: brightness(1.2)
   }
`

export default function Card(props) {


   return (
     <EstiloDiv> <div>
         <button onClick={props.onClose}>X</button>
         <Style><h2>{props.name}</h2></Style>
        <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h3>ID: {props.id}</h3>
         <ImagenBrilla><img src={props.image} alt="Acá debería verse una imagen" /></ImagenBrilla>
      </div></EstiloDiv>
   );
}