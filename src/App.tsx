import React, {useState} from 'react';
import './App.css';
import {Form}  from './components'
import ClipLoader from "react-spinners/ClipLoader";

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const renderLoading = () => {
    if(isLoading){
      return (
        <ClipLoader size={150} />
      )
    }
    return (
      <>
        <Form setPokemon={setPokemon} setIsLoading={setIsLoading}/>

        {(pokemon.length > 0)
          ? pokemon
          : 'goodbye' 
        }
      </>
    )
  }


  return (
    <div className="App">
      {renderLoading()}
    </div>
  );
}


export default App;
