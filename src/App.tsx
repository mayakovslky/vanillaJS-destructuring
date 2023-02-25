import React from 'react';
import './App.css';

//rename commit

function App() {

    const names = ['Dimych', 'Sveta', 'Katya', 'Igor', 'Viktor']
    const users = [
        {name: 'Dimych'},
        {name: 'Sveta'},
        {name: 'Katya'},
        {name: 'Igor'},
        {name: 'Viktor'}
    ]
    const liElements = users.map((u, index) => <li key={index}>{u.name}</li>)

    return (
        <div className='App'>
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
