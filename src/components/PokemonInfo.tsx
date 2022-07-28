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
    width:100%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding:40px;

    img {
        /* width:100%; */
        /* object-fit:contain; */
        width:50%;
        margin:-50px 0 -30px 0;
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
                        <li>Base Value: {stat.base_stat}</li>
                        <li>Effort: {stat.effort}</li>
                    </ul>
                </div>
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
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Species: {pokemon.species.name}</p>
            </div>

            {createPokemonStats(pokemon.stats)}

            {/* 
            list of base stats
            number of games appeared in
            */}
        </Wrapper>   
    )
}


export default PokemonInfo;