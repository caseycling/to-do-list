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

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(
      todo =>  todo.id !== id
      )]})
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
