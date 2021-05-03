// Write your Character component here

//Need to import react
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

//Write a function that renders an individual character
export default function Character(props){
    const { currentCharacter, setCurrentCharacter } = props
}

// App.setCurrentCharacter.map(app => {
//     return <Character name={App.name}
// })

//Render a single character to the DOM
const rootElement = document.getElementById('root');
//ReactDOM.render<Character/>, rootElement