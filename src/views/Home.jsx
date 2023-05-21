
import Cards from "../components/Cards"
import styled from "styled-components"


const Fondo = styled.div`
background-image: url(./gif/imagen.jpeg)
`

function Home() {

return (

<>
<Fondo>
<Cards  />
</Fondo>

</>

)

}
export default Home