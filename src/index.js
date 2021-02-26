import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';

ReactDOM.render(
    <div>
        <h1 className="headingStyle">Todo App</h1>
        <Card />
        <Card />
        <Card />
        <Card />
    </div>,
    document.getElementById('root')
);
