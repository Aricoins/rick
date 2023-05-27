
import Cards from "../components/Cards"
import styled from "styled-components"


const Fondo = styled.div`
background-image: url(./gif/imagen.jpeg)
`

function Home(props) {

return (

<>
<Fondo>
Bienvenido {props.username }
<Cards  />
</Fondo>

</>

)

}
export default Home