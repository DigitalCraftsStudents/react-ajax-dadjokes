// 1. import
import React from 'react';

// 3. define
function JokesContainer(props) {
    return (
        <section>
            <h3>The latest joke:</h3>
            {
                props.jokes.map(joke => (
                    <p key={joke.id}
                    >{joke.joke}</p>
                ))
            }
        </section>
    );
}

// 2. export
export default JokesContainer;