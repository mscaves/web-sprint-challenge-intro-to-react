import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

//Need to import API and get the character component from character.js
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //I need to know the list of characters and a default character
  const [characters, setCharacters ] = useState([])
  const [activeCharacter, setActiveCharacter] = useState(null)

  //Creating a side effect where we pull data from a different site
  //Then creating a promise. Needs to resolve and error out. Could use the way we learned or async await
  //After we get the data from the API we need to put it in an array
  useEffect(() =>{
    axios.get('https://swapi.dev/api/people')
    .then(resolve => {
      setCharacters(resolve.data);
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
