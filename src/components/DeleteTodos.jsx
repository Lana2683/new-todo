import React, { PureComponent } from 'react'

class DeleteTodos extends PureComponent {
    render(){
        return(
            <button  onClick={this.props.clearList}>Clear Todos</button>
        )
    }
}

export default DeleteTodos