import React, {useState}  from 'react';
import baseUrl from '../http-common';



interface Props {
   setPokemon:(pokemon: string) => void;
   setIsLoading:(isLoading: boolean) => void;
 }

const Form =({ setPokemon, setIsLoading}: Props) => {
   const [pokemonName, setPokemonName] = useState('');
   // clefairy
   const handleSubmit = async (e:React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      try {
         const response = await baseUrl.get(pokemonName);
         setPokemon(response.data.name);

      } catch (error){
         console.log(error)
      }
      setIsLoading(false);
   }

   return (
      <form onSubmit={(e)=>handleSubmit(e)} >
         <label>
            Name:
            <input type="text" name="name" onChange={event => setPokemonName(event.target.value)} />
         </label>
         <input type="submit" value="Submit" />
      </form>
   )
}


export default Form;