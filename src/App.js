import './App.css';
import Header from './Header';
import JokeButton from './JokeButton';
import JokesContainer from './JokesContainer';

import { useState, useEffect } from 'react';

function App() {
  // tells React to perform actions that
  // are not directly related to drawing.
  // aka "side effects"
  // This is the equivalent of "window.onload".
  // This side effect will run exactly 1 time, no matter
  // how often React has to re-run the App() function to check
  // if anything needs redrawing in the actual/live DOM on the page.
  // This "calculation" and "reconciliation" process is known as
  // React's Virtual DOM.
  useEffect(() => {
    async function getJoke() {
      // fetch the joke
      const jokePromise = fetch('https://icanhazdadjoke.com', {
          headers: {
              Accept: 'application/json'
          }
      });
      const response = await jokePromise;
      const jokeData = await response.json();
      
      console.log(jokeData.joke);
    }
    getJoke();
  });

  const [joke, setJoke] = useState("who's there"); 
  console.log(`This is the joke in state: `, joke);
  return (
    <div className="App">
      <Header />
      <JokeButton />
      <JokesContainer joke={joke}/>
    </div>
  );
}

export default App;
