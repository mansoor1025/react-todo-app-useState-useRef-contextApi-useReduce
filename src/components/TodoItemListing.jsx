import { MdDeleteSweep } from "react-icons/md";
import {TodoItemsContextApi} from '../store/TodoItemContextApi'
import { useContext } from "react";

function TodoItemListing ({title, dueDate}){
   const { handlerDeleteButton } = useContext(TodoItemsContextApi)
    return   <div className="container">
                <div className="row kg-row">
                <div className="col-6">
                    {title}
                </div>
                <div className="col-4">
                    {dueDate}
                </div>
                <div className="col-2">
           x         <button type="button" className="btn btn-danger kg-button" onClick={()=> handlerDeleteButton(title)} ><MdDeleteSweep /></button>
                </div>
                </div>
            </div>
}

export default TodoItemListing;