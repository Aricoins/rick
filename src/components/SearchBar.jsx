import styled from "styled-components";

const Barra = styled.nav`
   
background-color: #050101;
`
const Boton = styled.button`
  display: inline-block;
  width: 10 rem;
  color: #050000;
  font-size: large;
  :hover{

   background-color: #0a0808;
   color: #f8f1f1;
   cursor: pointer;

  }
`

export default function SearchBar(props) {



   console.log(props)
   return (
      <Barra>
         
         <div>
          <input type='search' />
          <Boton><button onClick={()=> props.onSearch("En desarrollo")}><Boton> Agregar</Boton></button></Boton>
      </div>
      </Barra>
   );
}
