import React, { Component } from 'react';
import Todos from './Components/Todos';
import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import About from './Components/pages/About';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
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

    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(
          todo => todo.id !== id)]
      }))
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))

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
