import React from 'react';
import ReactDOM from 'react-dom';

const todoTitle = 'Call Family';
const todoDesc = 'rs shonjoy is a full stark web developer.';
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

const headingStyle = {
    backgroundColor: 'gray',
    color: 'cyan',
    textAlign: 'center',
    padding: '15px',
};

ReactDOM.render(
    <div>
        <h1 style={headingStyle}>{todoTitle}</h1>
        <h3>{todoDesc}</h3>
        <p>{`${dateName} ${monthName} ${currentYear}`}</p>
    </div>,
    document.getElementById('root')
);
