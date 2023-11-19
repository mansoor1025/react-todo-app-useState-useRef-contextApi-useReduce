import { useContext } from 'react'
import TodoItem1 from '../components/TodoItemListing'
import styles from '../moduleCss/TodoItems.module.css'
import {TodoItemsContextApi} from '../store/TodoItemContextApi'

function TodoItems(){
   const {todoItem} = useContext(TodoItemsContextApi)
   return <div className={styles.todoItems}>
        {
          todoItem.map(item=> <TodoItem1 key={item.title} title={item.title} dueDate={item.dueDate} />)
        }
      </div>
}

export default TodoItems;