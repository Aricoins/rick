import Card from './Card';


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
   return <div>{lista}</div>
}
