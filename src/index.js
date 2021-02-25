import React from 'react';
import ReactDOM from 'react-dom';

const index = 0;

function Clock({ locale }) {
    return (
        <h1 className="heading" tabIndex={index}>
            <span className="text">Hello {new Date().toLocaleTimeString(locale)}</span>
            <img src="" alt="" />
        </h1>
    );
}
ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));
