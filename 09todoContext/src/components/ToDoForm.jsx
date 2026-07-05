import React, { useState } from 'react'
import { useToDo } from '../contexts/ToDoContext'

function TodoForm() {
    const [todo, setTodo] = useState('')
    const { addTodo } = useToDo()

    const add = (e) => {
        e.preventDefault()
        if (!todo.trim()) return
        addTodo(todo.trim())
        setTodo('')
    }

    return (
        <form onSubmit={add} className="flex flex-col gap-3 rounded-[22px] border border-slate-200 bg-slate-50/80 p-3 shadow-sm sm:flex-row sm:items-center">
            <input
                type="text"
                placeholder="Write a new task..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
                + Add Task
            </button>
        </form>
    )
}

export { TodoForm }
export default TodoForm

