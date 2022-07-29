import React, {useState}  from 'react';
import baseUrl from '../http-common';
import styled from "styled-components";


interface Props {
   setPokemon:(pokemon: any) => void;
   setIsLoading:(isLoading: boolean) => void;
   setIsError:(setIsError:boolean) => void;
   setOakErrorCount:(setOakErrorCount:number) => void;
   oakErrorCount:number;
   isError:boolean;
   setPokemonSpecies:(setPokemonSpecies: any) => void;
}


const Form =({ isError, setPokemon, setIsLoading, setIsError, setOakErrorCount, oakErrorCount, setPokemonSpecies }: Props) => {
   const [pokemonName, setPokemonName] = useState('');

   const handleSubmit = async (e:React.FormEvent) => {
      e.preventDefault();
      if(pokemonName.length < 1){
         return
      }
      setIsLoading(true);
      setIsError(false);
      try {
         const response = await baseUrl.get('pokemon/' + pokemonName.toLowerCase());
         setPokemon(response.data);

         try {
            const response = await baseUrl.get('pokemon-species/' + pokemonName.toLowerCase());
            setPokemonSpecies(response.data);
         } catch (error){
            setPokemonSpecies('Unknown');
         }
         
      } catch (error){
         setIsError(true);
         setPokemon(false);
         if(oakErrorCount === 2){
            setOakErrorCount(0)
         }
         else {
            setOakErrorCount(oakErrorCount + 1)
         }  
      }
      setIsLoading(false);
   }

   return (
      <Wrapper>
         <form onSubmit={(e)=>handleSubmit(e)} >
            
            <input placeholder='Pokemon name:' type="text" name="name" onChange={event => setPokemonName(event.target.value)} />

            <input type="submit" value="Submit" />

            {(isError)
               ? <p>That doesnt seem to be a valid pokemon name</p>
               : <></>
            }
         </form>
      </Wrapper>
   )
}


const Wrapper = styled.div`
   width:100%;
   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

   form {
      padding:50px;
      background-color:#DFDFDF;
      display:flex;
      flex-direction:column;
      border-radius:5px;

      input {
         padding:10px;
         box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      }

      input:nth-of-type(1){
         margin-bottom:20px;
      }

      p {
         color:red;
         margin-top:20px;
      }
   }
`


export default Form;