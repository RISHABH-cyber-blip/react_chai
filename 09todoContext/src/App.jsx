import React, { useState, useEffect } from 'react'
import { ToDoProvider } from './contexts'
import { ToDoForm, ToDoItem } from './components/Index'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todoText) => {
    const todo = typeof todoText === 'string' ? { todo: todoText } : todoText
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), completed: false, ...todo }])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleTodoCompletion = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)))
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos && storedTodos.length > 0) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const totalTodos = todos.length
  const completedTodos = todos.filter((todo) => todo.completed).length
  const pendingTodos = totalTodos - completedTodos

  return (
    <ToDoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodoCompletion }}>
      <div className="min-h-screen bg-[linear-gradient(135deg,_#f5f7fb_0%,_#eef2f7_45%,_#e7ecf4_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 rounded-[28px] border border-slate-200/80 bg-white/80 px-5 py-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] backdrop-blur-xl sm:px-8 sm:py-8">
          <div className="flex flex-col gap-4 rounded-[24px] border border-slate-200 bg-slate-50/80 p-4 sm:flex-row sm:items-end sm:justify-between sm:p-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">Professional Planner</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">Manage Your Tasks</h1>
              <p className="mt-2 text-sm text-slate-600">Keep your day organized with a calm and polished workspace.</p>
            </div>

            <div className="flex gap-3">
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Pending</p>
                <p className="text-xl font-semibold text-slate-900">{pendingTodos}</p>
              </div>
              <div className="rounded-2xl bg-slate-900 px-4 py-3 text-white shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-300">Completed</p>
                <p className="text-xl font-semibold">{completedTodos}</p>
              </div>
            </div>
          </div>

          <div className="mb-1">
            <ToDoForm />
          </div>

          {todos.length === 0 ? (
            <div className="rounded-[22px] border border-dashed border-slate-300 bg-slate-50/70 px-5 py-8 text-center text-sm text-slate-500">
              No tasks yet. Add your first task to get started.
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <ToDoItem todo={todo} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App