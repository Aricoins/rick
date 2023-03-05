import Card from './Card';
import styled from 'styled-components';

const EstilosCards = styled.div`
background-color: #0a0101;
`

export default function Cards(props) {
   const { characters } = props;
   const lista = characters.map((e, index) => 
         <Card 
            id ={e.id}
            name={e.name} 
            image= {e.image} 
            species={e.species} 
            gender={e.gender}
            onClose={() => window.alert('Emulamos que se cierra la card')}
            />)
   return <EstilosCards><div>{lista}</div></EstilosCards>
}
