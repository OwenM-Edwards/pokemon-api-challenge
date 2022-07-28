import React, {useState,useEffect}  from 'react';
import { OakError } from '.';
import baseUrl from '../http-common';
import styled, {ThemeProvider, keyframes} from "styled-components";


interface Props {
    pokemon:any;
    pokemonSpecies:any;
}


const PokemonInfo = ({pokemon, pokemonSpecies}: Props) => {

    const createPokemonStats = (stats : any):any[] => {
        let tempHtml: any[] = [];
        let key = 0;
        stats.forEach(function (stat : any) {
            tempHtml = [...tempHtml, (
                <div key={key} className="statContainer">
                    <p>{stat.stat.name}</p>
                    <ul >
                        <li>Base Value: {stat.base_stat}</li>
                        <li>Effort: {stat.effort}</li>
                    </ul>
                </div>
            )];
            key++;
        });
        return tempHtml;
    }

    const createPokemonGameIndex = (games : any):any[] => {
        let tempHtml: any[] = [];
        let key = 0;
        games.forEach(function (game : any) {
            tempHtml = [...tempHtml, (
                <li key={key}>
                    <p>{game.version.name}</p>
                </li>
            )];
            key++;
        });
        return tempHtml;
    }

    return (
        <Wrapper>
            <h2>{pokemon.name.replace(/^\w/, (name:string) => name.toUpperCase())}</h2>
            <img src={pokemon.sprites.front_default}/>
            
            <div className="basicInfoContainer">
                <p>Height: {pokemon.height / 10 } m</p>
                <p>Weight: {pokemon.weight / 10 } kg</p>
                <p>Species: {pokemonSpecies.names[1].name}</p>
            </div>

            {createPokemonStats(pokemon.stats)}

            <div className="gamesContainer">
                <h3>
                    {pokemon.name.replace(/^\w/, (name:string) => name.toUpperCase())} has appeared in {pokemon.game_indices.length} games
                </h3>
                <ul>
                    {createPokemonGameIndex(pokemon.game_indices)}
                </ul>
                
            </div>
        </Wrapper>   
    )
}


const Wrapper = styled.div`
    background-color:#DFDFDF;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:30px;
    width:100%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding:40px;
    border-radius:5px;

    img {
        /* width:100%; */
        /* object-fit:contain; */
        width:50%;
        margin:-20px 0 0 0;
    }

    h2 {
        font-size:37px;
    }

    .basicInfoContainer {
        display:flex;
        width:100%;
        justify-content:center;
        margin-bottom:40px;
        p{
            border-right:1px solid black;
            padding:10px;
        }
        p:nth-of-type(1){
            border-left:1px solid black;
        }
    }
    
    .statContainer {
        display:flex;
        justify-content:space-between;
        align-items:center;
        border:2px solid red;
        margin-bottom:30px;
        width:100%;
        padding:40px;
        
        p {
            font-size:17px;
            font-weight:bold;
        }
        ul {
            width:50%;
        }

    }

    .gamesContainer {
        display:flex;
        flex-direction:column;
        align-items:center;
        border:2px solid red;
        margin-bottom:30px;
        width:100%;

        h3 {
            width:100%;
            background-color:#0075BE;
            padding:20px;
            text-align:center;
        }
        
        ul {
            -webkit-column-count: 3;
            -moz-column-count: 3;
            column-count: 3;
            padding:30px;

            li {
                padding:0 10px;
            }
        }
        p {
            font-size:17px;
            font-weight:bold;
        }
    }
`


export default PokemonInfo;