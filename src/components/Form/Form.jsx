import React from "react"
import { useState } from "react";
import styled from "styled-components"
import imagen from "./ImagenW.jpeg"
import {validation} from "./validation";


const Contenedor= styled.div`
    display: grid;
    text-align: center;
    grid-template-columns: 20% 30% 30% 20%;
    max-width: 80%;
justify-content: space-around;
height: 80%;
transform: traslate (-50%)(-50%); 
@media only screen and (max-width : 900px) {
border-color: aliceblue;
 border: 20%;
 display: grid;
 grid-template-columns: 100%; 
 grid-template-rows: 100%;
 grid-row-start: 3;
 width: 180px;
 text-align: center;
 justify-content: center;
 align-content: center;
}


`

const WelcomeCard = styled.div`
text-align: center;
background-color: black;
color: white;
max-width: 80%;
 font-size: 0.8em;
  padding: 1em;
  margin: 1em;
  box-shadow: 0em 1em 2em 0.5em;
    max-height: 90%;
  border-radius: 1em;
  opacity: 0.9;
  flex-direction: column;
  grid-column-start: 3;
  @media only screen and (max-width : 900px){
width: 22em;
margin-top: 50px;
margin-bottom: 50px;
justify-content: center;
text-align: center;


  }
  `;


const BotonSubmit = styled.button`
flex-direction: column;
background-color: #d6e909;
  align-content: center;
  height: 20%;
  width: 90%;
  padding: 2%;
  color: #080000;
  cursor: pointer;
  :hover{
    background-color: #07f907;
    color: #090000;
  }
`;
const ImagenW = styled.img`
       max-width: 50%;
`
const BotonIn = styled.input`
background-color: #f7f7f6;
left:0;
right: 0;
margin: auto;
`;

const H1 = styled.h1`
color:white;
display: flex;
`;

const Formulario= styled.form`
 max-width: 80%;
 max-height: 80%;
`
const Pe =styled.p`
  font-size: 1em;
  color:white;
  background-color: #31c253;
`


export default function Form({ login }) {
  const [userData, setUserData] = useState({
      email:'',
      password:''
  })

  const [errors, setErrors] = useState({})

  function handleChange(event){
      setErrors(validation({...userData, [event.target.name]:event.target.value}))
      setUserData({...userData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
      event.preventDefault()
      login(userData)
  }
return <Contenedor>
  <WelcomeCard>
    <ImagenW src={imagen}/>
          <Formulario onSubmit={handleSubmit}>
              <label htmlFor="email">
                  Email:
                  <BotonIn 
                      type="text" 
                      id="email"
                      value={userData.email}
                      name="email"
                      onChange={handleChange}/>
              </label>
              {errors.email && (<Pe>{errors.email}</Pe>)}
              <label htmlFor="password">
                  Password:
                  <BotonIn 
                      type="password" 
                      id="password"
                      value={userData.password}
                      name="password" 
                      onChange={handleChange}/>
              </label>
              {errors.password && (<Pe >{errors.password}</Pe>)}
              <BotonSubmit>Submit</BotonSubmit>
          </Formulario>
          </WelcomeCard>
      </Contenedor>;
}

// export default function Form({login}) {
//   const [userData, setUserdata] = useState({
//    username: "",
//    password: ""
//   })
  
//   const [errors, setErrors] = useState({
//     username: "",
//     password: ""
//   });

//  const handleChange = (e)=> {
//       const property= e.target.name;
//     const value = e.target.value; 
//     setErrors(validation({...userData, [property]:value}))
//     setUserdata({...userData, [property]: value});
//   }
//   const handleSubmit = (e) =>{
// e.preventdefault()
//   login(userData)
// }



//   return ( <Contenedor>
//       <WelcomeCard>
     
//       <H1>Henrick App</H1>
//        <ImagenW src={imagen}/>
//        <h2> Los 827 personajes de Rick & Morty</h2>
//         <Formulario onSubmit={handleSubmit}>

//         <div>
//         <label htmlFor="username" >
//           Ingrese un e-mail:
//         <BotonIn name="username" 
//                  id="username"
//                  type="text"
//                  value={userData.username} 
//                  placeholder="usuario@henrick.app" 
//                  onChange={handleChange}
//                  autoComplete="on"
//                  /> 
//                   {errors.username &&(<Pe>{errors.username}</Pe>)}
//         </label>
//         </div>
        
//         <div> 
//         <label htmlFor="password">
//             Ingrese una contraseña:
           
//         <BotonIn type="password"
//                  id="password" 
//                  name="password" 
//                  value={userData.password} 
//                  placeholder="pass1234" 
//                  onChange={handleChange}
//                  autoComplete="off"
//                 />
//                          {(errors.password && <Pe>{errors.password}</Pe>)}
//           </label>
//           </div>
          
//           <div> 
//           <label>
//           <BotonBorde type="submit" > Ingresar </BotonBorde>
//           </label>  
//           </div>
              
//          </Formulario> 
        
//         </WelcomeCard>
//         </Contenedor>


// );


