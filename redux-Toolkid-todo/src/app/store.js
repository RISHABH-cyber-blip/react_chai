import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
    ,
    devTools: process.env.NODE_ENV !== 'production' ? { name: 'redux-Toolkid-todo' } : false
})

// Enable Redux DevTools explicitly in development for clearer inspection
// configureStore enables DevTools by default, but an explicit option
// and a store name can help some browser setups and extensions.
export default store;