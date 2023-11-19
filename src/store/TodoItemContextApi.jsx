import { createContext, useReducer} from "react";

export const TodoItemsContextApi = createContext([{
    todoItem : [],
    addButton :()=>{},
    handlerDeleteButton:()=>{}
}]);

const todoItemReducer = (currentValue,action)=>{
    let updatedTodoItem = currentValue
    if(action.type === 'ADD_NEW_ITEM'){
      updatedTodoItem = [...currentValue,{ title : action.payload.todoName,dueDate: action.payload.todoDate }]
    }
    else if(action.type === 'DELETE_TODO_ITEM'){
      updatedTodoItem = updatedTodoItem.filter(obj => obj.title !== action.payload.title);
    }
    return updatedTodoItem;
} 

const TodoItemBusinessLogin = ({children})=>{

    const [todoItem, dispatchTodoItem] = useReducer(todoItemReducer,[])

    const addButton = (todoName, todoDate)=> {
      const actionTodoItem = {
        type: 'ADD_NEW_ITEM',
        payload:{
          todoName,
          todoDate
        }
      }
      dispatchTodoItem(actionTodoItem)
    }
  
    const handlerDeleteButton = (title)=> {
      const deleteAction = {
        type: 'DELETE_TODO_ITEM',
        payload:{
          title
        }
      }
      dispatchTodoItem(deleteAction)
    }
    
   return <TodoItemsContextApi.Provider value={{
        todoItem,
        addButton,
        handlerDeleteButton
      }}> 
      {children}
    </TodoItemsContextApi.Provider>
}

export default TodoItemBusinessLogin