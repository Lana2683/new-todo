import React, { PureComponent } from 'react'
import TodoListItem from './TodoListItem';

class TodoList extends PureComponent {
    render () {
      const {
        onClickDelete,
        onClickDone,
        todoList
      } = this.props
        
        return (
          <tbody>
            {todoList.map((todoItem) =>
               <TodoListItem
               key={todoItem.id}
               todoItem={todoItem}
               id={todoItem.id}
               onClickDelete={() => onClickDelete(todoItem.id)}
               onClickDone={() => onClickDone(todoItem.id)}
              />
            )}
          </tbody>
        );
      }
}


export default TodoList 
