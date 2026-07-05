import React, { useState } from 'react'
import { useToDo } from '../contexts/ToDoContext'

function TodoItem({ todo }) {
    const { updateTodo, deleteTodo, toggleTodoCompletion } = useToDo()
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const editTodo = () => {
        if (!todoMsg) return
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleTodoCompletion(todo.id)
    }

    return (
        <div
            className={`flex flex-col gap-3 rounded-[22px] border px-3 py-3 shadow-sm transition sm:flex-row sm:items-center ${
                todo.completed ? 'border-emerald-200 bg-emerald-50/80' : 'border-slate-200 bg-white'
            }`}
        >
            <label className="flex items-center gap-2 text-sm text-slate-500">
                <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
                    checked={todo.completed}
                    onChange={toggleCompleted}
                />
                <span>{todo.completed ? 'Completed' : 'Pending'}</span>
            </label>

            <input
                type="text"
                className={`w-full rounded-xl border bg-transparent px-3 py-2 text-sm text-slate-700 outline-none ${
                    isTodoEditable ? 'border-slate-300' : 'border-transparent'
                } ${todo.completed ? 'line-through text-slate-500' : ''}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                    className="inline-flex h-9 min-w-[76px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                    onClick={() => {
                        if (todo.completed) return

                        if (isTodoEditable) {
                            editTodo()
                        } else setIsTodoEditable((prev) => !prev)
                    }}
                    disabled={todo.completed}
                >
                    {isTodoEditable ? 'Save' : 'Edit'}
                </button>

                <button
                    className="inline-flex h-9 min-w-[82px] items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-3 text-sm font-medium text-rose-600 transition hover:bg-rose-100"
                    onClick={() => deleteTodo(todo.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TodoItem
