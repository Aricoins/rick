import styled from "styled-components";


const EstiloDiv=styled.div`
background-color: #06ea3c ;
display: inline-flex;
height: 20%;

`


const Style = styled.h2`
background-color: #07f617;
color: white;
:hover{
background-color: #f28e03;
}
`


const ImagenBrilla =styled.h2 `
   background-color:#f28e03
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