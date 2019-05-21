import React, { PureComponent } from 'react'
import TodoListItem from './TodoListItem';

class TodoList extends PureComponent {
    render () {
        var todoItem = this.props.todoList.map((todoItem, id) => {
          return (
            <TodoListItem key={id} todoItem={todoItem} id={id} onClickClose={this.props.onClickClose} onClickDone={this.props.onClickDone} />
          );
        });
        return (
            <tbody>{todoItem}</tbody>
        );
      }
}


export default TodoList 
