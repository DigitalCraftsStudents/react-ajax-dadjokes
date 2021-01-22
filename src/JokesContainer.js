// 1. import
import React from 'react';

// 3. define
function JokesContainer(props) {
    return (
        <section>
            <h3>All the jokes:</h3>
            {
                props.jokes.map(j => (
                    <p key={j.id}>{j.joke}</p>
                ))
            }
        </section>
    );
}

// 2. export
export default JokesContainer;