import React, { PureComponent } from 'react';
import { Done } from './Done';
import { Close } from './Close'

class TodoListItem extends PureComponent {
    render () {
      const {
        todoItem: {
          done,
          id,
          label
        },
        onClickDone,
        onClickDelete
      } = this.props
      
      return(
        <tr className={done ? 'done' : 'undone'}>
            <td><button  onClick={()=>onClickDone(id)}>
                  <Done/>
                </button>
            </td>
            <td>
              {label}
            </td>
            <td><a 
                  href="#" 
                  className="button u-pull-right" 
                  onClick={onClickDelete}>
                  <Close/>
                </a>
            </td>       
        </tr> 
      );
    }
  }
export default TodoListItem