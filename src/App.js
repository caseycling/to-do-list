import React, { Component } from 'react';
import Todos from './Components/Todos'

import './App.css';

class App extends Component {
  state = {
    todos: [ 
      {
        id: 1,
        title: 'Master React.js',
        completed: false
      },
      {
        id: 2,
        title: 'Clean bathroom',
        completed: false
      },
      {
        id: 3,
        title: 'Get grocceries',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
