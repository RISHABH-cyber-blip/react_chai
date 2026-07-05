import React,{useState,useEffect} from 'react'
import { ToDoProvider } from './contexts'
import { ToDoForm, ToDoItem } from './components/Index'

const App = () => {
  const [todos, setTodos] = useState([])
  
  const addTodo = (todoText) => {
    const todo = typeof todoText === 'string' ? { todo: todoText } : todoText;
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), completed: false, ...todo }])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev)=>prev.filter((prevTodo)=>(prevTodo.id !== id)))
  }
  
  const toggleTodoCompletion = (id) => {
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  }

  useEffect(() => {
     const todos= JSON.parse(localStorage.getItem('todos'));
      if(todos && todos.length > 0) setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
   <ToDoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodoCompletion}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo)=>(
                <div key={todo.id} className='w-full'>
                   <ToDoItem todo={todo} />
                </div>
              ))}
          </div>
      </div>
     </div>
   </ToDoProvider>
  )
}

export default App