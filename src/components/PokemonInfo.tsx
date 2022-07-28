import React, {useState,useEffect}  from 'react';
import { OakError } from '.';
import baseUrl from '../http-common';
import styled, {ThemeProvider, keyframes} from "styled-components";


interface Props {
    pokemon:any;
}


const Wrapper = styled.div`
    background-color:#DFDFDF;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:50px;
    padding:30px 0;
    width:100%;
`


const PokemonInfo = ({pokemon}: Props) => {

    useEffect(() => {
        console.log(pokemon)
    }, []);


    return (
        <Wrapper>
            <p>Name: {pokemon.name}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Species: {pokemon.species.name}</p>
            <img src={pokemon.sprites.front_default}/>

            {/* 
            list of base stats
            number of games appeared in
            */}
        </Wrapper>   
    )
}


export default PokemonInfo;