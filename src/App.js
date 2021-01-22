import './App.css';
import Header from './Header';
import JokeButton from './JokeButton';
import JokesContainer from './JokesContainer';

import { useState } from 'react';

function App() {
  const [jokeArray, setJokeArray] = useState(["(joke placeholder)"]); 
  
  // tells React to perform actions that
  // are not directly related to drawing.
  // aka "side effects"
  // This is the equivalent of "window.onload".
  // This side effect will run exactly 1 time, no matter
  // how often React has to re-run the App() function to check
  // if anything needs redrawing in the actual/live DOM on the page.
  // This "calculation" and "reconciliation" process is known as
  // React's Virtual DOM.

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
    // If React is managing a variable for us
    // via useState(), we CANNOT assign to it.
    //joke = jokeData.joke; // NOOOOOOOO!

    // Instead, we should ask React to update
    // the value of the variable.
    // That tells React that it should redraw.
    //setJoke(jokeData.joke);
    setJokeArray([    // set it to a brand new array
      ...jokeArray,   // that contains all the old jokes
      jokeData.joke   // and the new joke
    ]);
    // React knows that it's the same variable
    // at the same address in memory.
    // It's not going to look inside the array
    // to see if it has changed.
    //jokeArray.push(jokeData.joke);
    //setJokeArray(jokeArray); // how do I keep what I had before
                    // but also add the new joke?
  }
  

  //console.log(`This is the joke in state: `, joke);
  return (
    <div className="App">
      <Header />
      <JokeButton handleClick={getJoke} />
      <JokesContainer jokes={jokeArray}/>
    </div>
  );
}

export default App;
