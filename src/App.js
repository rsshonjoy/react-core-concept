import React from 'react';
import Card from './components/Card';
import Data from './data.json';

function App() {
    let items = [];
    items = Data.map((item) => <Card titleText={item.title} descText={item.desc} />);
    return (
        <div>
            <h1 className="headingStyle">Todo App</h1>
            {items}
        </div>
    );
}

export default App;
