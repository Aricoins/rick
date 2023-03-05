import Card from './Card';
import styled from 'styled-components';

const Lista= styled.div`

border-color: aliceblue;
border: 2%
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
            onClose={() => window.alert('Pronto se podrá cerrar')}
            />)
   return <Lista><div>{lista}</div></Lista>
}
