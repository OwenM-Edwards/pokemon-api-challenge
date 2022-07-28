import React, {useState} from 'react';
import {Form, OakError, PokemonInfo}  from './components'
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import who_pokemon_image from './images/who-is-pokemon.png'

const Wrapper = styled.div`
  background-color: #FB1B1B   ;
  min-height:100vh;
  width:100%;

  .content {
    width:500px;
    margin:0 auto;
    padding-top:20%;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  img {
    width:200px;
    margin-bottom:50px;
  }
`



const App: React.FC = () => {
  const [pokemon, setPokemon] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [oakErrorCount, setOakErrorCount] = useState(-1);


  const renderLoading = () => {
    if(isLoading){
      return (
        <ClipLoader size={150} />
      )
    }
    return (
      <div className="content">

        <img src={who_pokemon_image}/>

        <Form setIsError={setIsError} setPokemon={setPokemon} setIsLoading={setIsLoading} oakErrorCount={oakErrorCount} setOakErrorCount={setOakErrorCount}/>

        {(pokemon)
          ? <PokemonInfo pokemon={pokemon} />
          : <></>
        }

        {(isError && !isLoading)
          ? <OakError setIsError={setIsError} isError={isError} oakErrorCount={oakErrorCount}/>
          : <></>
        }
      </div>
    )
  }


  return (
    <Wrapper>
      {renderLoading()}
    </Wrapper>
  );
}


export default App;
