import React from 'react'

const DeleteItems = ({clearList}) => {
    return(
        <button  onClick={clearList}>
            Clear Todo List
        </button>
    )
}

export default DeleteItems
