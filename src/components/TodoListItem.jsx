import React, { PureComponent } from 'react'

class TodoListItem extends PureComponent {
    render () {
      var todoClass = this.props.todoItem.done ? 
          'done':'undone' ;
      return(
        <tr className={todoClass}>
                <td><button  onClick={()=>this.props.onClickDone(this.props.todoItem.id)}>&#10004;</button></td>
                <td>{this.props.todoItem.label}</td>
                <td><a href="#" className="button u-pull-right" onClick={()=>this.props.onClickClose(this.props.todoItem.id)}>&#10006;</a></td>       
        </tr> 
      );
    }
  }
export default TodoListItem