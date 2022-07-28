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
    padding:10px 0;
    width:100%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);


    .imgContainer {
        background-color:blue;
        width:100%;
        img {
            /* width:100%; */
            /* object-fit:contain; */
            background-color:white;
        }
    }

    .statContainer {
        display:flex;
        justify-content:space-between;
        align-items:center;
        border:2px solid red;
        padding:10px;
        margin-bottom:30px;
        
        p {
            font-size:17px;
            font-weight:bold;
        }
        ul {
            width:50%;
        }
    }
`


const PokemonInfo = ({pokemon}: Props) => {

    useEffect(() => {
        console.log(pokemon)
    }, []);


    const createPokemonStats = (stats : any):any[] => {
        let tempHtml: any[] = [];
        let key = 0;
        stats.forEach(function (stat : any) {
            tempHtml = [...tempHtml, (
                <div key={key} className="statContainer">
                    <p>{stat.stat.name}</p>
                    <ul >
                        <li>State base Value: {stat.base_stat}</li>
                        <li>State effort: {stat.effort}</li>
                    </ul>
                </div>
 
            )];
            key++;
        });
        return tempHtml;
    }


    return (
        <Wrapper>
            <div className="imgContainer">
                <img src={pokemon.sprites.front_default}/>
            </div>
            
            <p>Name: {pokemon.name}</p>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Species: {pokemon.species.name}</p>

            <div className="baseStats">
                {createPokemonStats(pokemon.stats)}
            </div>

            {/* 
            list of base stats
            number of games appeared in
            */}
        </Wrapper>   
    )
}


export default PokemonInfo;