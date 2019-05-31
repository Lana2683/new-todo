import React, { Component } from 'react';

class AddTodo extends Component {
  render () {
    const {
      currentLabel,
      handleChangeLabel,
      onPressEnter,
      handleAddTodo
    } = this.props
    return (
      <div className="u-full-width">
        <h4>Todo List</h4>
        <input 
          type="text" 
          className="form-control u-full-width" 
          placeholder="add a new todo..."
          value={currentLabel}
          onChange={handleChangeLabel}
          onKeyUp={onPressEnter}
        />
        <button 
          className="button-primary" 
          onClick={handleAddTodo}>
            Add
        </button> 
      </div>
    );   
  }
}

export default AddTodo
