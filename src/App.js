import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

//Need to import API and get the character component from character.js
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  //I need to know the list of characters and a default character
  const [characters, setCharacters ] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState(null)

  //Creating a effect hook where we pull data from a different site via API
  //Then creating a promise. Needs to resolve and error out. Could use the way we learned or async await
  //Add a dependency array
  useEffect(() =>{
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setCharacters(res.data);
      //setCharacters(res.data[0].name);
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      {/* <Character currentCharacter={currentCharacter}
      setCurrentCharacter={setCurrentCharacter} /> */}


    </div>
  );
}

export default App;
