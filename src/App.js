import React, { Component } from 'react';
import Header from './components/layout/header';
import Todo from './components/Todo';
import AddToDo from './components/AddToDo';
import './App.css';

class App extends Component {
  state = {
    todo: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with family',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todo: this.state.todo.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  // Delete To do
  delTodo = (id) => {
    this.setState({
      todo: [...this.state.todo.filter(todo =>
        todo.id !== id)]
    });
  }

  // Add To Do
  addToDo = (title) => {
    const newToDo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todo: [...this.state.todo, newToDo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo addToDo={this.addToDo} />
          {/* passing State onto the Todo component as Props */}
          <Todo todo={this.state.todo} markComplete={this.markComplete}
            delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
