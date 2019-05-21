import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import DeleteTodos from './components/DeleteTodos';
import Header from './components/Header';
import Home from './components/Home'

import './App.css';

class App extends Component {
  state = {
    todoList: [],
    currentLabel: ''
  } 

  addTodo = () => {
   const todoItem = {
      id: this.state.todoList.length + 1,
      label: this.state.currentLabel,
      done: false,
      createdAtdate: new Date(),
      doneAtdate: false,
    }
    this.setState({ todoList: [...this.state.todoList, todoItem] })
    this.setState({ currentLabel: '' })
  }

  pressEnter = (e) => {
    if (e.which == 13) {
      this.addTodo()
    }
  }

  onClickDone = (id) => { 
    let todoList = this.state.todoList;
    const todoIndex = todoList.findIndex(todoItem => todoItem.id === id);
    const todo = todoList[todoIndex];
    todoList.splice(todoIndex, 1);
    todo.done = !todo.done;
    todo.doneAtdate = new Date();
    todoList.push(todo);
    this.setState({todoList: [...this.state.todoList]})
  }
  onClickClose = (id) => {
    var todoList = this.state.todoList;
    const todo = todoList.findIndex(todoItem => todoItem.id === id);
    todoList.splice(todo, 1);
    this.setState({todoList: [...this.state.todoList]})
  }
  clearList = () => {
    this.state.todoList=[];
    this.setState({todoList: this.state.todoList})
  }

  handleChangeLabel = (e) => {
    this.setState({
      currentLabel: e.target.value
    })
  }

  render() {
    return (
      <Router>
      <div className="container">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo
              handleAddTodo={this.addTodo}
              handleChangeLabel={this.handleChangeLabel}
              currentLabel={this.state.currentLabel}
              todoList={this.state.todoList}
              pressEnter={this.pressEnter}
            />
            <table className="u-full-width">
            <TodoList
              todoList={this.state.todoList}
              onClickDone={this.onClickDone}
              onClickClose={this.onClickClose}
            />
            </table>
            <DeleteTodos
              clearList={this.clearList}
            />
          </React.Fragment>
        )} />
        <Route path="/home" component={Home} />
      </div>
      </Router>
    );
  }
}
export default App
