import React, { Component } from 'react';
import Todos from './Components/Todos';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import About from './Components/pages/About';
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  // generateContent = (content) => {
  //   return content
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Header />
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}>
                </Todos>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
