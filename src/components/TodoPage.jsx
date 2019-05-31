import React, { PureComponent } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import DeleteItems from './DeleteItems';

class TodoPage extends PureComponent {
  state = {
    todoList: [],
    currentLabel: '',
    nextId: 0
  } 
  render() {
    return (
      <div className="container">
        <AddTodo
            handleAddTodo={this.addTodo}
            handleChangeLabel={this.handleChangeLabel}
            currentLabel={this.state.currentLabel}
            todoList={this.state.todoList}
            onPressEnter={this.onPressEnter}
        />
        <table className="u-full-width">
        <TodoList
            todoList={this.state.todoList}
            onClickDone={this.onClickDone}
            onClickDelete={this.onClickDelete}
        />
        </table>
        <DeleteItems
            clearList={this.clearList}
        />
      </div>
    );
    }

    addTodo = () => {
        const todoItem = {
           id: ++this.state.nextId,
           label: this.state.currentLabel,
           done: false,
           createdAtdate: new Date(),
           doneAtdate: null,
         }
         this.setState({ 
           todoList: [...this.state.todoList, todoItem],
           currentLabel: ''
          })
       }
     
       onPressEnter = (e) => {
         if (e.which === 13) this.addTodo()  
       }
     
       onClickDone = (id) => { 
         const todoList = this.state.todoList.map(todoItem => {
           if(todoItem.id === id){
             todoItem.done = !todoItem.done
             todoItem.doneAtdate = new Date();
           }
           return todoItem
         })
         this.setState({todoList})
       }
     
       onClickDelete = (id) => {
         const todoList = this.state.todoList.filter(todoItem => todoItem.id !== id);
         this.setState({todoList})
       }
     
       clearList = () => {
         this.setState({todoList: []})
       }
     
       handleChangeLabel = (e) => {
         this.setState({
           currentLabel: e.target.value
         })
       }
}
export default TodoPage
