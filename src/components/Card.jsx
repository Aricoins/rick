import styled from "styled-components";

const ImagenBrilla =styled.h2 `
opacity: 1;
   :hover{
      filter: brightness(1.2)
   }
`
const EstiloDiv=styled.div`
background-color: #131016; 
display: inline-flex;
opacity: 0.9;
height: 45%;
border-radius: 10px;

`


const Style = styled.h2`

color: white;
:hover{
background-color: #7b0808 ;
-webkit-text-stroke: 1px white;
color: black;
}
`

const BotonBorde = styled.button`
background-color: #7b0808 ;
align-content: flex-end;
height: 5%;
width: 8%;
padding: 2%;
color: #e1d9d9;
margin-left: 80%;
border-color: #e1d9d9;
`
const Propss = styled.h3`
text-shadow: 1px  0px 0px ,
               1px  1px 0px white,
              -1px  0px 0px white,
               1px -1px 0px white;
               :hover{
                  background-color: azure;
               }
`



export default function Card(props) {


   return (
     <EstiloDiv> <div>
        <BotonBorde onClick={props.onClose}> X </BotonBorde>
         <Style><h2>{props.name}</h2></Style>
         <Propss> <h3>{props.species}</h3></Propss>
         <Propss><h3>{props.gender}</h3></Propss>
         <Propss><h3>ID: {props.id}</h3></Propss>
         <ImagenBrilla><img src={props.image} alt="Acá debería verse una imagen" /></ImagenBrilla>
      </div></EstiloDiv>
   );
}