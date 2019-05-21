import React, { Component } from 'react';

// TODO: 
// 1. nextId по умному
// 2. handleChangeDone 
// 3. handleChangeDelete
// 4. Components
// 5. по enter
// 6. Линтеры

class AddTodo extends Component {
  render () {
    return (
      <div className="u-full-width">
        <h3>Todo List</h3>
        <input type="text" id="itemName" className="form-control u-full-width" placeholder="add a new todo..."
          value={this.props.currentLabel}
          onChange={this.props.handleChangeLabel}
          onKeyUp={this.props.pressEnter}
        />
        <button className="button-primary" onClick={this.props.handleAddTodo}>Add</button> 
        <table  className="u-full-width" id="todoList">
        </table>
      </div>
    );   
  }
}

export default AddTodo
