import React from 'react'
import AddTodo from './components/addToDo'
import Todos from './components/todo'

const App = () => {
  return (
    <>
    <nav className="bg-zinc-800 text-white p-4">
        <h1 className="text-2xl font-bold">Redux Toolkit Todo App</h1>
    </nav>
    <div className="container mx-auto p-4">
        <AddTodo />
        <Todos />
    </div>
    </>
  )
}

export default App