import React, {useState}  from 'react';
import baseUrl from '../http-common';
import styled from "styled-components";


const Wrapper = styled.div`
   background-color:blue;
   width:100%;
   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
   form {
      padding:50px;
      background-color:#DFDFDF;
      display:flex;
      flex-direction:column;
      input {
         padding:10px;
         box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      }
      input:nth-of-type(1){
         margin-bottom:20px;
      }
   }
`


interface Props {
   setPokemon:(pokemon: any) => void;
   setIsLoading:(isLoading: boolean) => void;
   setIsError:(setIsError:boolean) => void;
   setOakErrorCount:(setOakErrorCount:number) => void;
   oakErrorCount:number;
}


const Form =({ setPokemon, setIsLoading, setIsError, setOakErrorCount, oakErrorCount}: Props) => {
   const [pokemonName, setPokemonName] = useState('');

   const handleSubmit = async (e:React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      try {
         const response = await baseUrl.get(pokemonName);
         setPokemon(response.data);

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
         </form>
      </Wrapper>
   )
}


export default Form;