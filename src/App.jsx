import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import ItemNotFound from './components/ItemNotFound'
import './App.css'
import { useReducer, useState } from 'react'
import TodoItemBusinessLogin from './store/TodoItemContextApi'


function App() {
 
  return <div>
    <TodoItemBusinessLogin>
      <center>
        <AppName />
        <AddTodo />
        <ItemNotFound />
        <TodoItems />
      </center>
    </TodoItemBusinessLogin> 
  </div>
}

export default App
