// 1. import
import React from 'react';

// 3. define
// You can destructure props on the way into the function!
function JokesContainer({ jokes, handleDelete }) {
    //const { jokes, handleDelete } = props;

  
    return (
        <section>
            <h3>The latest joke:</h3>
            {
                jokes.map(joke => (
                    <p key={joke.id}
                    >{joke.joke}
                    <button
                      onClick={(e) => {
                        console.log('they clicked delete');
                        handleDelete(joke.id);
                    }}
                    >X</button>
                    </p>
                ))
            }
        </section>
    );
}

// 2. export
export default JokesContainer;