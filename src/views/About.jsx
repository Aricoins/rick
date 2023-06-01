import styled from "styled-components"
import imagenn from "./gif/arielgarciarogel.jpg"

 const Bloque= styled.div`
 background-color: red;
margin-top: 50%;;
width: 90% ;
background-color: rgba(4, 79, 72, 0.715);
  display: flex;
  flex-direction: column ;
  justify-content: center;
   box-shadow: 0em 1em 2em 0.5em;
  height: 80%;
  border-radius: 1em;
  align-self: center;
  align-items: center;
  align-content: center;
  align-tracks: center;
  height: 80% `;

  
const Contenedor= styled.div`

background-color: #f7f7f3;
opacity: 0.9;
width: 20em;
height: 25em;
padding: 2%;
margin: 10%;
display: flex;
flex-direction: flex;
justify-content: center;
align-self: center;

`


const Imagen= styled.img`
border-radius: 35%;
width: 12em;
height: 15em;
display:flex;
opacity: 0.9;
`

const Tecnologias = styled.div`
    display: flex;
    flex-direction:column; 
    background-color: white;
    width: 1500px;
  opacity: 0.8;
  justify-content: center;
  text-align: center;
  color: black;
  font-family: Lato;
  font-size: 80%;
  padding: 5%;
  align-items: center;

`
const H2= styled.h2`
  
color: white;
font-size: 20px
`
const Estilo= styled.span`
  background-color: #0e0e0e;
  opacity: 0.8;
  width: 22em;
  color: white; 
  padding: 20%; `

function About (){

    return(<>
<Contenedor>
<Bloque>
     <H2> About Henrick App</H2>   
     <Imagen src={imagenn} alt="imagen del desarrollador"/>
       <Estilo >   
       Desarrollé esta Single Page Application para Henry, con el entusiasmo propio de quien descubre cómo funciona cada elemento. <br/>
Rick, Morty y los 826 personajes que aquí se evocan pasan el tiempo entre la vida doméstica y los viajes espaciales e intergalácticos. <br/>
Codeando las magias de la tecnología, ¿cómo no jugar a habitar ese intersticio?
        </Estilo>
       <Tecnologias>
          <h3> Con Javascript, CSS, HTML, React, React Router & Redux </h3>
        <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Logo de JavaScript" width="50px" />
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="Logo de CSS" width="50px" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="Logo de HTML5" width="50px" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo de React" width="50px" />
      <img src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png" alt="Logo de React Router" width="50px" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="Logo de Redux" width="50px" />
      </div>
    </Tecnologias>
    </Bloque>
    </Contenedor>
    </>
    )
}

export default About