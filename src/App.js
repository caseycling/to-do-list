import React, { Component } from 'react';
import Todos from './Components/Todos';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Master React.js',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Clean bathroom',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Get grocceries',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(
        todo => todo.id !== id
      )]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  // generateContent = (content) => {
  //   return content
  // }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos 
            todos={this.state.todos} 
            markComplete={this.markComplete} 
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
