import React, {useEffect}  from 'react';
import OakImage from '../images/oak.png'
import styled from "styled-components";


const Wrapper = styled.div`
    width:300px;
    height:300px;
    position:absolute;
    bottom:0;
    left:0;
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
    transition:all 0.5s ease-in-out;
    background: url('${OakImage}') no-repeat center;
    background-size:cover;

    &.hidden {
        opacity:0;
    }

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

interface Props {
    isError:any;
    setIsError:(setIsError:boolean) => void;
    oakErrorCount:number;
}
 

const oakErrorPhrases = [
    "That 'aint no pokemon I've ever heard of.",
    "You been drinking those Hi-Potions again?",
    "That meant to be one of those 'deeg-ee-mons' or something?"
]


const OakError = ({ isError,setIsError,oakErrorCount }: Props) => {

    const getErrorMessage = () => {
        return (
            oakErrorPhrases[oakErrorCount]
        )
    }

    useEffect(() => {
        setTimeout(()=>{
            // Fade in
            document.querySelector('#wrapper')?.classList.remove('hidden');

            // After short time, fade out then remove error flag
            setTimeout(()=>{
                document.querySelector('#wrapper')?.classList.add('hidden');
                setTimeout(()=>{
                    setIsError(false);
                }, 1000)

            }, 4000)
        }, 300)
    }, []);

    return (
        <Wrapper id="wrapper" className="hidden">
            <p className="errorMessage">"{getErrorMessage()}"</p>
        </Wrapper>
    )
}


export default OakError;