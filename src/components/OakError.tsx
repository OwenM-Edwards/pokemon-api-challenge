import React, {useEffect}  from 'react';
import OakImage from '../images/oak.png'
import styled from "styled-components";
 

const oakErrorPhrases = [
    "That 'aint no pokemon I've ever heard of.",
    "You been drinking those Hi-Potions again?",
    "That meant to be one of those 'deeg-ee-mons' or something?"
]


interface Props {
    oakErrorCount:number;
}


const OakError = ({ oakErrorCount }: Props) => {
    return (
        <Wrapper id="wrapper">
            <p className="errorMessage">"{oakErrorPhrases[oakErrorCount]}"</p>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width:200px;
    height:200px;
    position:absolute;
    bottom:0;
    left:0;
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
    background: url('${OakImage}') no-repeat center;
    background-size:cover;

    p {
        position:absolute;
        top:10%;
        left:90%;
        width:400px;
        font-size:30px;
        color:white;
        text-indent:-10px;
    }
`


export default OakError;