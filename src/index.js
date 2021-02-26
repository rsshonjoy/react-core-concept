import React from 'react';
import ReactDOM from 'react-dom';

const todoTitle = 'Call Family';
const todoDesc = 'rs shonjoy is a full stark web developer.';
// const date = '26/02/2021';

ReactDOM.render(
    <div>
        <h1>{todoTitle}</h1>
        <h3>{todoDesc}</h3>
        <p>{new Date().getFullYear()}</p>
    </div>,
    document.getElementById('root')
);
