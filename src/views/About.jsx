import styled from "styled-components"
import imagenn from "./gif/arielgarciarogel.jpg"
import { Link } from "react-router-dom";


const Contenedor= styled.div`
  display:flex;
  justify-content: center;
  
`
const Bloque= styled.div`
  background-color: rgba(58, 58, 214, 0.5);
  max-width: 25%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.8em;
  padding: 1em;
  margin: 1em;
  box-shadow: 0em 1em 2em 0.5em;
  height: 80%;
  border-radius: 1em;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-items: center;
  
`;
const Imagen= styled.img`
border-radius: 35%;
width: 12em;
height: 15em;
display:flex;

`
const Tecnologias = styled.div`
    display: flex;
    flex-direction:column; 
    background-color: white;
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
  color: white;  `

function About (){

    return(<>
<Contenedor>
<Bloque>
     <H2> About Henrick App</H2>   
     <Imagen src={imagenn} alt="imagen del desarrollador"/>
       <Estilo >   
        Rick & Morty es una serie animada creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también emitida en Cartoon Network.
        La historia sigue las desventuras de un científico, Rick Sánchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos.
       Henrick.app trae de una API los 827 personajes de Roiland y los presenta en una Single Page Aplication. Fue desarrollada con React para Henry en mi aprendizaje como frontend.
       </Estilo>
       <Tecnologias>
          <h3> Desarrollado por <Link> mí </Link> para Henry con Javascript, CSS3, HTML5, React, React Router y Redux </h3>
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