import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id:1, text:'Learn Redux'}]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ id: nanoid(), text: action.payload });
        }
    }
});