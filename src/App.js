import './App.css';
import Header from './Header';
import JokeButton from './JokeButton';
import JokesContainer from './JokesContainer';

import { useEffect } from 'react';

function App() {
  // tells React to perform actions that
  // are not directly related to drawing.
  // aka "side effects"
  // 
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

  return (
    <div className="App">
      <Header />
      <JokeButton />
      <JokesContainer />
    </div>
  );
}

export default App;
