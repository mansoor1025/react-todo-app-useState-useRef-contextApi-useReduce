import { useContext } from 'react';
import {TodoItemsContextApi} from '../store/TodoItemContextApi'
function ItemNotFound (){
    const {todoItem} = useContext(TodoItemsContextApi)
    return todoItem.length === 0 && <h1>Item Not Found</h1>
}

export default ItemNotFound;