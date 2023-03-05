export default function SearchBar(props) {


   
   console.log(props)
   return (
      <div>
          <input type='search' />
      <button onClick={()=> props.onSearch("Búsquenme en la libertad")}>Agregar</button>
      </div>
   );
}
