// 1. import
import React from 'react';

// 3. define
function JokeButton(props) {
    return (
        <nav>
            <button
                onClick={props.getJoke}
            >
                Get a new Joke!
            </button>
        </nav>
    );
}

// 2. export
export default JokeButton;
