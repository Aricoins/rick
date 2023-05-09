import styled from "styled-components"

const Imagen= styled.img`
 background-image: url(./gif/arielgarciarogel.jpg);
border-radius: 50%;
`

const Bloque= styled.div`
  width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const Tecnologias = styled.div`
    display: flex;
    flex-direction:column; 
    background-color: white;
  opacity: 0.8;
  justify-content: space-around;
  color: black;
  font-family: Lato;
  font-size: 80%;
  padding: 5%;

`

const Estilo= styled.span`
  background-color: white;
  opacity: 0.8;
  width: 60%;
  
  
`

function About (){

    return(
<Bloque>
  <Imagen src="./gif/arielgarciarogel.jpg"/> 
             <Estilo>   
        <h2> About Henrick.app</h2>    
        <p><b>Rick & Morty</b> es una serie animada creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también emitida en Cartoon Network.</p>
        La historia sigue las desventuras de un científico, Rick Sánchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos.
       <p> <b>Henrick.app</b> trae de una API los 827 personajes de Roiland y los presenta en una Single Page Aplication. Fue desarrollada con React para Henry en mi aprendizaje como frontend.</p>
       </Estilo>
       <Tecnologias>
        <h3> Desarrollado con Javascript, CSS3, HTML5, React, React Router y Redux </h3>
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
    )
}

export default About