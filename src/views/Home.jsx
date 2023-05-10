
import Cards from "../components/Cards"
import styled from "styled-components"
const Fondo = styled.body`
background-image: url(../public/rick.gif)
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