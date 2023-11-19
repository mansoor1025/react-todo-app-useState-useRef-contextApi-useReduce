import { useContext, useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import {TodoItemsContextApi} from '../store/TodoItemContextApi'

function AddTodo(){
 const { addButton } = useContext(TodoItemsContextApi)
 const todoNameElement = useRef()
 const todoDateElement = useRef()
 const handleAddButtonClicked = (event) =>{
   event.preventDefault();
   const todoName = todoNameElement.current.value
   const todoDate = todoDateElement.current.value
   todoNameElement.current.value = ''
   todoDateElement.current.value  = ''
   if(todoName && todoDate){
    addButton(todoName,todoDate)
   }
 }

 return <div className="container">
    <form className="row kg-row" onSubmit={handleAddButtonClicked}>
      <div className="col-6">
        <input type="text" name="todoName" className="todoName" placeholder="Enter Todo Name" ref={todoNameElement} />
      </div>
      <div className="col-4">
        <input type="date" name="todoDate" className="todoDate" placeholder="Enter Todo Date" ref={todoDateElement} />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success success-button" ><IoMdAddCircleOutline /></button>
      </div>
    </form>
  </div>
}

export default AddTodo;