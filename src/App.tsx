import React, {useState} from 'react';
import {Form, OakError, PokemonInfo}  from './components'
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import who_pokemon_image from './images/who-is-pokemon.png'


const App: React.FC = () => {
  const [pokemon, setPokemon] = useState(false);
  const [pokemonSpecies, setPokemonSpecies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [oakErrorCount, setOakErrorCount] = useState(-1);


  const renderLoading = () => {
    if(isLoading){
      return (
        <div className="loadingContainer">
          <ClipLoader size={150} color={"#0075BE"} />
        </div>
      )
    }
    return (
      <div className="content">

        <img className="headerImage" src={who_pokemon_image} alt="Who is that Pokemon"/>

        <Form 
          isError={isError} 
          setIsError={setIsError} 
          setPokemon={setPokemon} 
          setIsLoading={setIsLoading} 
          oakErrorCount={oakErrorCount} 
          setOakErrorCount={setOakErrorCount}
          setPokemonSpecies={setPokemonSpecies}
        />

        {(pokemon)
          ? <PokemonInfo pokemon={pokemon} pokemonSpecies={pokemonSpecies} />
          : <></>
        }

        {(isError && !isLoading)
          ? <OakError oakErrorCount={oakErrorCount}/>
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


const Wrapper = styled.div`
  width:100%;
  padding:50px 0;
  display:flex;
  align-items:center;
  justify-content:center;

  .content {
    width:600px;
    margin:0 auto;
    padding-top:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .loadingContainer {
    position:relative;
    top:300px;
  }

  .headerImage {
    width:300px;
    margin-bottom:50px;
  }
`


export default App;
